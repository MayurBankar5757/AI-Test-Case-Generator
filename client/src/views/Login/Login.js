import React, {useState} from 'react'
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from '../../components/Navbar/Navbar';

function Login() {
  const history = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) =>{
    e.preventDefault()
    try{
      await axios.post("http://localhost:5000/", {
        email,password
      })
      .then(res=>{
        if(res.data==="exist"){
            history("/home")
        }
        else if(res.data==="notexist"){
          alert("user have not registered")
        }
      })
      .catch(e=>{
        alert("worng credentials")
        console.log(e)
      })
    }
    catch(e){
      console.log(e)
    }

  }


  //   alert(response?.data?.message);

  //   if(response?.data?.success){
  //     localStorage.setItem("user", JSON.stringify(response?.data?.data));
  //     window.location.href = "/testCase";
  //   }
  // }

  // useEffect(()=>{
  //   const storageUser = JSON.parse(localStorage.getItem("user") || '{}');

  //   if(storageUser?.email){
  //     alert("You are already logged in!");
  //     window.location.href = "/testCase";
  //   }

  // }, [])

  return (
    <div>
      <Navbar />
      <form className="login-form" action='POST'>
        <h1 className='text-center'>Login</h1>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email"
            placeholder="Enter your email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password"
            placeholder="Enter your password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }} />
        </div>

        <button type="button" className="btn login-btn"
          onClick={login} >
          Login
        </button>

        <p className="text-right">
          <Link to="/signup">Create a new account?</Link>
        </p>

      </form>
    </div>
  )
}

export default Login