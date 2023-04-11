import {GetStaticProps} from 'next'
import SecondFile from './secondfile'
import Head from 'next/head'

type DataProps = {
  data: {
    id: number;
    title: string;
  }
}

export default function Home({data}: DataProps[]) {
  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>

      <main className="m-10 flex-col space-y-2">
        <h1>Main title</h1>
        
        <SecondFile data={data} />
          
      </main>
    </>
  )
}

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
