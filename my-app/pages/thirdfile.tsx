import Link from 'next/link'
import { useState } from 'react'

type InternalProps = {
  datadb: {
    id: number;
    title: string;
  }
}

function ThirdFile() {
  
  const [convData, setConvData] = useState<InternalProps[]>([])
  const [color, setColor] = useState<boolean>(false)
  const [comment, setComment] = useState<string>("")
  
  //GET method
  const getDataApi = async () => {
    const res = await fetch('/api/handlerdata')
    const data = await res.json()
    setConvData(data)
    setColor(true)
  }
  //Post method
  const postDataApi = async () => {
    const res = await fetch('/api/handlerdata', {
      method: 'POST',
      body: JSON.stringify({comment}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    console.log(data)
  }
  //Delete comment
  const handleDelete = async (commentId: number) => {
    const res = await fetch(`/api/handlerdata/${commentId}`, {
      method: 'DELETE',
    })
    const data = await res.json()
    console.log(data)
    getDataApi()
  }

  return (
    <>
      <div>
        <h1>Lastcomponent</h1>
        <div>
        {color === true ? (
          <div className="visible mt-2 mb-3 p-1 w-40 text-center 
            text-green-400 bg-slate-800 border">
            
            {convData.map((d) => (
              <div key={d.id}>

                <Link href={`/${d.id}`}>{d.title}</Link>
                <button 
                  type="button" onClick={() => handleDelete(d.id)}
                  className="text-white border bg-red-600">
                  Delete (client action)!
                </button>

              </div>
            ))}

          </div>
        ) : (
          null
        )}
        </div>

        <button 
          type="button" onClick={getDataApi} 
          className="p-2 bg-slate-500 border">
          Call API by clicking this btn (you are client)
        </button>

        <div>

          <h3>Method post</h3>
          <input 
            type="text" value={comment} 
            onChange={(e) => setComment(e.target.value)}
            className="text-slate-900"
          />
          <button 
            type="button" onClick={postDataApi}
            className="ml-2 p-1 border text-white bg-slate-500">
            Post me to API (client action) !
          </button>

        </div>
      </div>
    </>
  )
}

export default ThirdFile