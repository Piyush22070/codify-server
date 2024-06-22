import fs from 'fs'
import { exec } from 'child_process';
import { asyncHandlers } from "../utils/asyncHandler.utils.js";


const executeCode = (fileName, command, res) => {
    exec(command, (error, stdout, stderr) => {
        // Delete the temporary file
         fs.unlinkSync(fileName);

        if (error) {
            console.error(`exec error: ${error}`);
            return res.status(500).json({ error: 'Error executing code', details: stderr });
        }
        res.json({ output: stdout });
    });
};

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
            fs.unlinkSync(execName); // Cleanup the executable
            break;
        case 'java':
            fileName = 'TempCode.java';
            fs.writeFileSync(fileName, code.join('\n'));
            command = `javac ${fileName} && java TempCode`;
            executeCode(fileName, command, res);
            fs.unlinkSync('TempCode.class'); // Cleanup the class file
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