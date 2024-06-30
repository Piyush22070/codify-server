import fs from 'fs';
import { exec } from 'child_process';
import { asyncHandlers } from '../utils/asyncHandler.utils.js';
import { questions } from './demoData.js';

const executeCode = (fileName, command, inputFileName, res) => {
    try {
        exec(command, (error, stdout, stderr) => {
            fs.unlinkSync(fileName);
            if (inputFileName) fs.unlinkSync(inputFileName); 
            if (error) {
                return res.status(500).json({ error: error.message, stderr });
            }
            res.json({ output: stdout, stderr });
        });
    } catch (err) {
        res.status(500).json({ error: 'Error executing code' });
    }
};

// To handle the restart of server and make them start again
process.on('uncaughtException', (err) => {});
process.on('unhandledRejection', (reason, promise) => {});

const solve = asyncHandlers(async (req, res) => {
    const { code, language, index } = req.body;
    // sample Input from question and index 
    let input = questions[index].sampleInput
    let fileName;
    let command;
    let inputFileName;
    switch (language) {
        case 'py':
            fileName = 'tempCode.py';
            fs.writeFileSync(fileName, code.join('\n'));
            if (input) {
                inputFileName = 'input.txt';
                fs.writeFileSync(inputFileName, input);
                command = `python3 ${fileName} < ${inputFileName}`;
            } else {
                command = `python3 ${fileName}`;
            }
            executeCode(fileName, command, inputFileName, res);
            break;
        case 'cpp':
                fileName = 'tempCode.cpp';
                fs.writeFileSync(fileName, code.join('\n'));
                const execName = 'tempCode.out';
                if (input) {
                    inputFileName = 'input.txt';
                    fs.writeFileSync(inputFileName, input);
                    command = `g++ ${fileName} -o ${execName} && ./${execName} < ${inputFileName}`;
                } else {
                    command = `g++ ${fileName} -o ${execName} && ./${execName}`;
                }
                exec(command, (error, stdout, stderr) => {
                    if (error) {
                        res.status(500).json({ error: error.message, stderr });
                    } else {
                        res.json({ output: stdout, stderr });
                    }
                    fs.unlinkSync(execName); // Remove the executable file after execution
                });
                break;
        case 'java':
            fileName = 'Main.java';
            fs.writeFileSync(fileName, code.join('\n'));
            if (input) {
                inputFileName = 'input.txt';
                fs.writeFileSync(inputFileName, input);
                command = `javac ${fileName} && java Main < ${inputFileName}`;
            } else {
                command = `javac ${fileName} && java Main`;
            }
            executeCode(fileName, command, inputFileName, res);
            fs.unlinkSync('Main.class');
            break;
        default:
            res.status(400).json({ message: 'Unsupported language' });
    }
});

export { solve };
