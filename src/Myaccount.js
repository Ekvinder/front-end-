
import React from 'react'

export default function Myaccount() {

  const getuserinfo = localStorage.getItem("userinfo")?JSON.parse(localStorage.getItem("userinfo")):null

  return (
    <>
     <div className="container-fluid pb-5">
    <div className="row px-xl-5">
      <div className="col-lg-5 mb-30">
        <div
          id="product-carousel"
          className="carousel slide"
          data-ride="carousel"
        >
          
          <div className="carousel-inner bg-light">
        <div>
            <img className="w-100 h-100" src={getuserinfo.image} alt="Image"/>
          </div>
        </div>  
          </div>
      </div>
      <div className="col-lg-7 h-auto mb-30">
        <div className="h-100 bg-light p-30">
          <h4>{getuserinfo.firstName} {getuserinfo.lastName}</h4>
          
          <h5 className="font-weight-semi-bold mb-4"><b>Email:</b> {getuserinfo.email}</h5>
          <h5 className="font-weight-semi-bold mb-4"><b>User name: </b>{getuserinfo.username}</h5>
          <h5 className="font-weight-semi-bold mb-4"><b>User id:</b> {getuserinfo.id}</h5>
          <h5 className="font-weight-semi-bold mb-4"><b>Gender:</b> {getuserinfo.gender}</h5>
        </div>
      </div>

   
  </div>
  </div>
  
 </>
)
}