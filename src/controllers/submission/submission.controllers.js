import { asyncHandlers } from '../../utils/asyncHandler.utils.js';
import { client } from '../../utils/redisClient.js';
import { Submission } from '../../models/submission.model.js'; // adjust path as needed

const submission = asyncHandlers(async (req, res) => {
  const { userId, questionId, code, language, testCases } = req.body;

  if (!Array.isArray(testCases) || testCases.length === 0) {
    return res.status(400).json({ message: 'Test cases must be a non-empty array.' });
  }

  // Create DB record with "pending" status
  const submissionDoc = await Submission.create({
    user: userId,
    question: questionId,
    code: code.join('\n'),
    status: 'pending'
  });

  const job = {
    jobId: submissionDoc._id.toString(), // using MongoDB _id as jobId
    code,
    language,
    testCases,
    user: userId,
    question: questionId
  };

  await client.lPush('codeQueue', JSON.stringify(job));

  res.status(202).json({
    message: 'Submission received and queued for execution.',
    jobId: job.jobId
  });
});

export { submission };
