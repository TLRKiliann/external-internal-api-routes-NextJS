// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { datadb } from '../../database/db_test'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      res.status(200).json(datadb)
    } else if (req.method === 'POST') {
      const comment = req.body.comment
      const newComment = {
        id: Date.now(),
        title: comment,
      }
      datadb.push(newComment)
      res.status(201).json(newComment)
    }
  } catch (err) {
    res.status(500).json({
      error: 'failed to load or update data'
    })
  }
}
