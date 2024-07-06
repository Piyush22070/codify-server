import fs from 'fs';
import { exec } from 'child_process';
import { asyncHandlers } from '../utils/asyncHandler.utils.js';
import { questions } from './demoData.js';

const executeCode = (fileName, command, inputFileName, res, index) => {
    const output = questions[index].sampleOutput
    try {
        exec(command, (error, stdout, stderr) => {
            fs.unlinkSync(fileName);
            if (inputFileName) fs.unlinkSync(inputFileName); 
            if (error) {
                return res.status(500).json({ error: error.message, stderr });
            }
            // code exected
           if (stdout.trim() === output.trim()) {  
                res.json({ output: stdout, stderr });
            } 
            else {
                const textCaseError = {
                    message : "Failed to match Test Case : "+output
                }
                res.json({ output: stdout, stderr ,textCaseError});
            }
            
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
            executeCode(fileName, command, inputFileName, res,index);
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
                executeCode(fileName, command, inputFileName, res,index);
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
                
                    executeCode(fileName, command, inputFileName, res,index);
                    break;
        default:
            res.status(400).json({ message: 'Unsupported language' });
    }
});

export { solve };
