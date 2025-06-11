import { asyncHandlers } from '../../utils/asyncHandler.utils.js';
import { client } from '../queue/redisClient.js';

const getResult = asyncHandlers(async (req, res) => {
  const { jobId } = req.params;

  if (!jobId) {
    return res.status(400).json({ message: 'Job ID is required.' });
  }

  const result = await client.get(`result:${jobId}`);

  if (!result) {
    return res.status(202).json({ status: 'pending', message: 'Result not ready.' });
  }

  return res.status(200).json({
    status: 'completed',
    jobId,
    results: JSON.parse(result),
  });
});

export { getResult };
