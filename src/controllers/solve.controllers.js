import fs from 'fs'
import { exec } from 'child_process';
import { asyncHandlers } from "../utils/asyncHandler.utils.js";


const executeCode = (fileName, command, res) => {
    try {
        exec(command, (error, stdout, stderr) => {
            fs.unlinkSync(fileName);
            if (error) {
                return res.status(500).json({ error: error.message, stderr });
            }
            res.json({ output: stdout, stderr });
        });
    } catch (err) {
        res.status(500).json({ error: 'Error executing code' });
    }
};

// to handel the restart of server and make them start again
process.on('uncaughtException', (err) => {});
process.on('unhandledRejection', (reason, promise) => {});


const solve = asyncHandlers( async (req, res)=>{

    const { code, language } = req.body;
    let fileName;
    let command;

    switch (language) {
        case 'py':
            fileName = 'tempCode.py';
            fs.writeFileSync(fileName, code.join('\n'));
            command = `python3 ${fileName}`;
            executeCode(fileName, command, res);
            break;
        case 'cpp':
            fileName = 'tempCode.cpp';
            fs.writeFileSync(fileName, code.join('\n'));
            const execName = 'tempCode.out';
            command = `g++ ${fileName} -o ${execName} && ./${execName}`;
            executeCode(fileName, command, res);
            fs.unlinkSync(execName); 
            break;
        case 'java':
            fileName = 'Main.java';
            fs.writeFileSync(fileName, code.join('\n'));
            command = `javac ${fileName} && java Main`;
            executeCode(fileName, command, res);
            fs.unlinkSync('Main.class'); 
            break;
        case 'js':
            fileName = 'tempCode.js';
            fs.writeFileSync(fileName, code.join('\n'));
            command = `node ${fileName}`;
            executeCode(fileName, command, res);
            break;
        default:
            res.status(400).json({ message: 'Unsupported language' });
    }
})
export {solve}