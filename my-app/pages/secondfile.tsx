import ThirdFile from './thirdfile'

type ExternalProps = {
  data: {
    id: string,
    title: string
  },
}[]

export default function SecondFile({data}: ExternalProps) {
  return (
    <>
      <div>
        {data.slice(0, 10).map((d) => (
          <p key={d.id}>{d.title}</p>
          ))
        }
        <ThirdFile />
      </div>
    </>
  )
}
