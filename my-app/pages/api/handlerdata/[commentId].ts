import type { NextApiRequest, NextApiResponse } from 'next'
import { datadb } from '../../../database/db_test'

type CommentProps = {
  id?: number;
  title: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { commentId } = req.query as { commentId: string };
  if (req.method === 'GET') {
    const comment = datadb.find((comment: CommentProps) => {
      return comment?.id === parseInt(commentId)
    })
    res.status(200).json(comment)
  } else if (req.method === 'DELETE') {
    const deleteComment = datadb.find((comment: CommentProps) => {
      return comment?.id === parseInt(commentId)
    })
    const index = datadb.findIndex(
      (comment) => comment.id === parseInt(commentId)
    )
    datadb.splice(index, 1)

    res.status(200).json(deleteComment)
  }
}