import { GetStaticPaths, GetStaticProps } from 'next'
import { datadb } from './../database/db_test'

type CommentProps = {
  comment: {
    id: number;
    title: string;
  }
}

function Comment({ comment }: CommentProps){
  return (
    <div>
      <p>{comment.id} {comment.title}</p>
    </div>
  )
}

export default Comment

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths:[
      {
        params: {commentId: '1'}
      },
      {
        params: {commentId: '2'}
      },
      {
        params: {commentId: '3'}
      }
    ],
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  const { commentId } = params

  const comment = datadb.find((comment) => comment.id === parseInt(commentId))
  return {
    props: {
      comment,
    }
  }
}