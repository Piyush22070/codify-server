import { asyncHandlers } from '../../utils/asyncHandler.utils.js';
import { client } from '../queue/redisClient.js';
import { v4 as uuidv4 } from 'uuid';

const submission = asyncHandlers(async (req, res) => {
  const { code, language, testCases } = req.body;

  if (!Array.isArray(testCases) || testCases.length === 0) {
    return res.status(400).json({ message: 'Test cases must be a non-empty array.' });
  }
  const jobId = uuidv4();  
  const job = {
    jobId,
    code,
    language,
    testCases, 
  };

  await client.lPush('codeQueue', JSON.stringify(job));
  res.status(202).json({ message: 'Submission received and queued for execution.',
    jobId: jobId,
   });
  
});

export { submission };
