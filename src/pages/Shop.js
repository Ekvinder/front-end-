import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react'
export default function Shop() {
const [products,setproducts] = useState([]);
const [category,setcategory] = useState([]);
const [sort, setsort] = useState("");

//?sortBy=price&order=desc

const getSort = (n) =>{
  setsort(n)
 // alert(n)
}
useEffect(() => {
  fetch(`https://dummyjson.com/products${sort}`)
.then(res => res.json())
.then(d=>{
  setproducts(d.products)
});
},[sort]);

useEffect(() => {
  fetch('https://dummyjson.com/products/categories')
.then(res => res.json())
.then(c => {
  setcategory(c)
});
},[]);

console.log(products)

  return (
    <>
   {/* Breadcrumb Start */}
   <div className="container-fluid">
      <div className="row px-xl-5">
        <div className="col-12">
          <nav className="breadcrumb bg-light mb-30">
            <a className="breadcrumb-item text-dark" href="#">
              Home
            </a>
            <a className="breadcrumb-item text-dark" href="#">
              Shop
            </a>
            <span className="breadcrumb-item active">Shop List</span>
          </nav>
        </div>
      </div>
    </div>
    {/* Breadcrumb End */}
    
    {/* Shop Start */}
    <div className="container-fluid">
      <div className="row px-xl-5">
        {/* Shop Sidebar Start */}
        <div className="col-lg-3 col-md-4">
          {/* Price Start */}
          <h5 className="section-title position-relative text-uppercase mb-3">
            <span className="bg-secondary pr-3">Filter by categories</span>
          </h5>
          <div className="bg-light p-4 mb-30">
            <ul className="list-group">
              {category?.map((d) =>{
              return(
                <Link to={`/product/${d.slug}`} 
                className="list-group-item list-group-item-action" 
                key={d.slug} >
                  {d.name}
                  </Link>
              )
              })}
            </ul>
          </div>
          {/* Price End */}
         </div>
        {/* Shop Sidebar End */}
        {/* Shop Product Start */}
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
                      Title
                    </button>
                  
                    <div className="dropdown-menu dropdown-menu-right">
                    
                      <a className="dropdown-item" href="#" onClick={()=>getSort('?sortBy=title&order=asc')}>
                        Ascending
                      </a>
                      
                      <a className="dropdown-item" href="#" onClick={()=>getSort('?sortBy=title&order=desc')}>
                        Descending
                      </a>
                     
                    </div>
                  
                  
                  </div>
                  <div className="btn-group ml-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-light dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Price
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#" onClick={()=>getSort('?sortBy=price&order=asc')}>
                      Ascending
                      </a>
                      <a className="dropdown-item" href="#" onClick={()=>getSort('?sortBy=price&order=desc')}>
                      Descending
                      </a>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {  products.map((d)=>
            
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1" key={d.id}>
              <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                 <Link to={`/singlep/${d.id}`}>
                  <img
                    className="img-fluid w-100"
                    src={d.thumbnail}
                    alt=""
                  />
                  </Link>
                
                </div>
                <div className="text-center py-4">
                  <a className="h6 text-decoration-none text-truncate" href="">
                    {d.title}
                  </a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>${(d.price-((d.discountPercentage*d.price)/100)).toFixed(2)}</h5>
                    <h6 className="text-muted ml-2">
                      <del>${d.price}</del>(discount: {d.discountPercentage} %off)
                    </h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small>{d.rating}</small>
                  </div>
                </div>
              </div>
            </div>
            
          )}
          
            <div className="col-12">
              <nav>
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/* Shop Product End */}
      </div>
    </div>
    {/* Shop End */}
  </>
  
  )
}
