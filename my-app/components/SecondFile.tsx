import ThirdFile from '../pages/thirdfile'

type ExternalProps = {
  data: {
    id: number
    title: string
  }[]
}

export default function SecondFile({ data }: ExternalProps) {
  return (
    <>
      <div>
        <h2 style={{marginBottom: "10px", color: "orangered"}}>
        	External API (typicode)
        </h2>
        <div>
          {data.slice(0, 10).map((d) => (
            <p key={d.id}>{d.title}</p>
            ))
          }
        </div>
        <ThirdFile data={data} id={0} title={''} />
      </div>
    </>
  )
}
