import  {useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Login() {
const [error,setError] = useState("");
const [user, setuser] = useState("");
const [pass, setpass] = useState("");

let nav = useNavigate()
  
const getLogin = async () =>{
  await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      
      username: user,
      password: pass,
      expiresInMins: 30, // optional, defaults to 60
    })
  })
  .then(res => res.json())
  .then(data=>{
    localStorage.setItem("userinfo",JSON.stringify(data))
    if ('message' in data){
      setError("username or password is incorrect")
    }
    else {
        nav("/Cart")
    }
   
  })
  .catch(console.log("errorrr"));
}
  return (
    <>
    <div className="container">
    <h1 className='alert alert-danger'>{error}</h1>
    <form>
  {/* Email input */}
  <div data-mdb-input-init="" className="form-outline mb-4">
    <input onChange={(e)=>setuser(e.target.value)} type="email" id="form2Example1" className="form-control" />
    <label className="form-label" htmlFor="form2Example1">
      User Name
    </label>
  </div>
  {/* Password input */}
  <div data-mdb-input-init="" className="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control" onChange={(e)=>setpass(e.target.value)} />
    <label className="form-label" htmlFor="form2Example2">
      Password
    </label>
  </div>
  {/* 2 column grid layout for inline styling */}
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      {/* Checkbox */}
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          defaultValue=""
          id="form2Example31"
          defaultChecked=""
        />
        <label className="form-check-label" htmlFor="form2Example31">
          {" "}
          Remember me{" "}
        </label>
      </div>
    </div>
    <div className="col">
      {/* Simple link */}
      <a href="#!">Forgot password?</a>
    </div>
  </div>
  {/* Submit button */}
  <button
    type="button"
    onClick={getLogin}
    data-mdb-button-init=""
    data-mdb-ripple-init=""
    className="btn btn-primary btn-block mb-4"
  >
    Sign in
  </button>
  {/* Register buttons */}
  <div className="text-center">
    <p>
      Not a member? <a href="#!">Register</a>
    </p>
    <p>or sign up with:</p>
    <button
      type="button"
      data-mdb-button-init=""
      data-mdb-ripple-init=""
      className="btn btn-link btn-floating mx-1"
    >
      <i className="fab fa-facebook-f" />
    </button>
    <button
      type="button"
      data-mdb-button-init=""
      data-mdb-ripple-init=""
      className="btn btn-link btn-floating mx-1"
    >
      <i className="fab fa-google" />
    </button>
    <button
      type="button"
      data-mdb-button-init=""
      data-mdb-ripple-init=""
      className="btn btn-link btn-floating mx-1"
    >
      <i className="fab fa-twitter" />
    </button>
    <button
      type="button"
      data-mdb-button-init=""
      data-mdb-ripple-init=""
      className="btn btn-link btn-floating mx-1"
    >
      <i className="fab fa-github" />
    </button>
  </div>
</form>
</div>
</>
  )
}
