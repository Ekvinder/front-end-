import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Certifieduser() {
  const [user, setuser] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(a => {
  console.log(a)
  setuser(a.users)
});
  },[]);
 
  return (
    <>
        {/* user Start */}
    <div className="container-fluid">
      <div className="row px-xl-5">
        
        {/* user Start */}

        <div className="col-lg-9 col-md-8">
          <div className="row pb-3">
            <div className="col-12 pb-1">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div>
                  <button className="btn btn-sm btn-light">
                    <i className="fa fa-th-large" />
                  </button>
                  <button className="btn btn-sm btn-light ml-2">
                    <i className="fa fa-bars" />
                  </button>
                </div>
                <div className="ml-2">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-light dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Sorting
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        Latest
                      </a>
                      <a className="dropdown-item" href="#">
                        Popularity
                      </a>
                      <a className="dropdown-item" href="#">
                        Best Rating
                      </a>
                    </div>
                  </div>
                  <div className="btn-group ml-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-light dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Showing
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">
                        10
                      </a>
                      <a className="dropdown-item" href="#">
                        20
                      </a>
                      <a className="dropdown-item" href="#">
                        30
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {user.map((a)=>
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1" key={a.id}>
              <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                 <Link to={`/single/${a.id}`}>
                  <img
                    className="img-fluid w-100"
                    src={a.image}
                    alt=""
                  />
                  </Link>
                </div>
                <div className="text-center py-4">
                  <a className="h6 text-decoration-none text-truncate" href="">
                    {a.firstName}  {a.lastName}
                  </a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    
                  </div>
                
                </div>
              </div>
            </div>
          )}
            
            
          </div>
        </div>
      
        {/* Shop Product End */}
      </div>
    </div>
    {/* Shop End */}
    </>
 )  
}
