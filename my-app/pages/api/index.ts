import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  prop_Hello: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({prop_Hello: "hello"})
}