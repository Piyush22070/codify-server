import { createClient } from 'redis';

export const client = createClient();

client.on('error', (err) => console.error('Redis Client Error', err));

await client.connect();

