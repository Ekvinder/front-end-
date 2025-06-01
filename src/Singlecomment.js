import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Singlecomment() {
    let {id} = useParams();

    const[comt,setcomt] = useState([]);

    useEffect(() => {
      fetch(`https://dummyjson.com/posts/user/${id}`)
    .then(res => res.json())
    .then(a => {
        setcomt(a.posts)
    });
    },[]);
    console.log(comt)
  return (
    <>
    <div  key={comt.id}>
              <div >
                <div >
                 
                  {/* <img
                    className="img-fluid w-100"
                    src={comt.image}
                    alt=""
                  /> */}
                  
                </div>
                {comt.map(c =>(
    <div className="container" key={c.id}>
    <p className="h6 text-decoration-none text-truncate" >
     <h4>{c.title}</h4>
    </p><br/>
    <p className="h6 text-decoration-none text-truncate" >
     {c.body}  
    </p><br/>
    <p className="h6 text-decoration-none text-truncate" >
    Views: {c.views} 
    </p>
    

   <br/>
    <div className="d-flex align-items-center justify-content-center mt-2">
  
    </div>
  
  </div>
                ))}

                </div>
            </div>
   </>
  )
}
