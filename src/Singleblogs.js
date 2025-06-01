import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function Singleblogs() {
    let {id} = useParams ()
    
    const [single,setsingle] = useState([])
    const [comment,setcomment] = useState([])
    useEffect(() =>{
        fetch(`https://dummyjson.com/posts/${id}`)
        .then(res => res.json())
        .then(s => {
            setsingle(s)
        });
    },[]);

    useEffect(() =>{    
      fetch(`https://dummyjson.com/comments/post/${id}`)
      .then(res => res.json())
      .then(c =>{
        setcomment(c.comments)
      });
    },[id]);
     console.log(comment)

  return (
    <>
    <div  key={single.id}>
              <div >
                <div>
                 
                  {/* <img
                    className="img-fluid w-100"
                    src={single.image}
                    alt=""
                  /> */}
                  
                </div>
    <div className="container">
                  <h2 >
                   {single.title}
                  </h2><br/>
                  <p style={{position:"relative"}} >
                   {single.body}  
                  </p><br/>
                  <p  >
                 Views : {single.views} 
                  </p><br/>
                  
                  {comment.map((c,i) => (
                    <div key={i}>
                  
                  <Link to={`/singlecom/${c.id}`}>
                  <p >
                   <h4> {c.user?.username}</h4>
                  </p></Link>
                  <p >
                    {c.body}
                  </p><br/>
                    </div>
                  ))}
                 <br/>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                
                  </div>
                
                </div>
                </div>
            </div>
   </>
  )
}
