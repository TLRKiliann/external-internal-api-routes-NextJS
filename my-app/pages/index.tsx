import { GetStaticProps } from 'next'
import Head from 'next/head'
import SecondFile from '../components/SecondFile'

type DataProps = {
  data: {
    id: number,
    title: string
  }[]
}

export default function Home({ data }: DataProps) {
  return (
    <>
      <Head>
        <title>NextJS Routing</title>
      </Head>

      <main className="m-10 flex-col space-y-2">
        <h1>NextJS Routing</h1>
        
        <SecondFile data={data} />
          
      </main>
    </>
  )
}

//server component
export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https:jsonplaceholder.typicode.com/todos/");
  const data = await res.json();
  return {
    props: {
      data: data,
    },
    revalidate: 10,
  }
}
