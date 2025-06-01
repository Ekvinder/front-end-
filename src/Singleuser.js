import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Singleuser() {
    let {id}=useParams()
    const [single,setsingle] = useState([])
    useEffect(() =>{
        fetch(`https://dummyjson.com/users/${id}`)
.then(res => res.json())
.then(s => {
    setsingle(s)
    console.log(single)
});
    },[]);
  return (
   <>
   <div className="col-lg-4 col-md-6 col-sm-6 pb-1" key={single.id}>
              <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                 
                  <img
                    className="img-fluid w-100"
                    src={single.image}
                    alt=""
                  />
                  
                </div>
    <div className="text-center py-4">
                  <a className="h6 text-decoration-none text-truncate" href="">
                   Name : {single.firstName}  {single.lastName}
                  </a><br/>
                  <a className="h6 text-decoration-none text-truncate" href="">
                   UserName :  {single.username}  
                  </a><br/>
                  <a className="h6 text-decoration-none text-truncate" href="">
                    Phone nu:{single.phone}  
                  </a><br/>
                  <a className="h6 text-decoration-none text-truncate" href="">
                   Email : {single.email}  
                  </a><br/>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    
                  </div>
                
                </div>
                </div>
            </div>
   </>
  )
}
