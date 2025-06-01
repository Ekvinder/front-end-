import React from "react";
import './style.css'

const Css =() => {
 return (
<>
  <h2 style={{color:"red"}}> Hello style</h2>
  <p> this text in red color</p>
</>
)
}

export default Css

 export const Header = () =>{
  const style={
    color:"white",
    backgroundColor: "lightblue",
    padding:"10px",
    fontFamily:"Sans-Serif"
  }
 return(
  <>
   <h2 style={style}>JavaScript Object</h2>
   <p style={style}>You can also create an object with styling information, and refer to it in the style attribute:</p>
  </>
 )

}

export  const Stylesheet =() =>{
  return(
   <>
   <h1>CSS stylesheet</h1>
   <p> create other css file and import it in main file </p>
   </>

  )
}