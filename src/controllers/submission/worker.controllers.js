import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { client } from '../queue/redisClient.js';

const sandboxPath = path.join(process.cwd(), 'src/controllers/submission/sandbox');
console.log(" Sandbox Path:", sandboxPath);

const safeUnlink = (filePath) => {
  if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
};

const processJob = async (job) => {
  const { code, language, testCases = [], jobId } = job;
  const extension = language === 'cpp' ? 'cpp' : language === 'py' ? 'py' : 'java';
  const filename = `TempCode.${extension}`;
  const filepath = path.join(sandboxPath, filename);

  const results = [];

  for (const { input, expectedOutput } of testCases) {
    const inputPath = path.join(sandboxPath, 'input.txt');

    fs.writeFileSync(filepath, code.join('\n'));
    if (input) fs.writeFileSync(inputPath, input);

    let command;
    switch (language) {
      case 'py':
        // Use a safe runCode.py sandbox
        command = `docker run --rm \
          --network=none \
          --memory=128m \
          --cpus=0.5 \
          -v ${sandboxPath}:/app \
          python:3.11 \
          bash -c \"cd /app && python runCode.py ${filename} < input.txt\"`;
        break;
      case 'cpp':
        command = `docker run --rm \
          --network=none \
          --memory=128m \
          --cpus=0.5 \
          -v ${sandboxPath}:/app \
          gcc:latest \
          bash -c \"cd /app && g++ ${filename} -o a.out && ./a.out < input.txt\"`;
        break;
      case 'java':
        command = `docker run --rm \
          --network=none \
          --memory=128m \
          --cpus=0.5 \
          -v ${sandboxPath}:/app \
          openjdk:latest \
          bash -c \"cd /app && javac ${filename} && java Main < input.txt\"`;
        break;
      default:
        results.push({ passed: false, error: `Unsupported language: ${language}` });
        continue;
    }

    try {
      const output = await new Promise((resolve) => {
        exec(command, (error, stdout, stderr) => {
          safeUnlink(filepath);
          safeUnlink(inputPath);

          if (error) {
            return resolve({ passed: false, error: error.message, stderr });
          }

          const result = {
            passed: stdout.trim() === expectedOutput.trim(),
            output: stdout.trim(),
            expected: expectedOutput.trim(),
            stderr: stderr?.trim(),
          };

          resolve(result);
        });
      });

      results.push(output);
    } catch (err) {
      results.push({ passed: false, error: err.message });
    }
  }

  console.log(` Job ${jobId || 'N/A'} completed:`, results);

  if (jobId) {
    //save to redis
    await client.set(`result:${jobId}`, JSON.stringify(results), {
        EX: 300, // 5mins
    });
  }
};

const listenQueue = async () => {
  console.log('👂 Worker started and listening on Redis queue...');
  while (true) {
    try {
      const job = await client.brPop('codeQueue', 0);
      if (job) {
        const payload = JSON.parse(job.element);
        await processJob(payload);
      }
    } catch (err) {
      console.error('Error processing job:', err);
    }
  }
};

listenQueue();
