import { useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Success() {
  
 const getOrederItems = async() =>{
try{
  const response = await axios.get("http://localhost:8000/order-items");
  console.log(response);
  localStorage.setItem("orderItem",JSON.stringify(response.data?.data));
}
catch(error){
  console.log(error.message);
}
};

useEffect(() => {
  getOrederItems();
},[]);
 

  return (
<>

  <div className="container">
    <h5 className="position-relative text-uppercase mb-3 text-success text-center">
      YOUR ORDER IS SUCCESSFULLY ORDERD
    </h5>
    <Link to={"/order-items"}>
    <button className="btn btn-block btn-primary font-weight-bold py-3"> View Order</button>
    </Link>
  </div>

</>

  )
}
