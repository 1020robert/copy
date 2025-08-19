import { NextApiRequest, NextApiResponse } from 'next';
import { search } from '../../server-lib/search';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (typeof req.query.search !== 'string') {
    res.status(400).json({ error: 'Invalid search.' });
    return;
  }

  const results = await search(req.query.search);
  res.status(200).json({ results });
};
