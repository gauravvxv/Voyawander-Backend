import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import axios from "axios"
import Style from "../Signup/Signup.module.css";
import { useSelector } from "react-redux";
import logo from "../../Images/logo_website.png";

export const Signup = () => {
const [name,setName] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [isError,setError] = useState("");


const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!name||! email|| !password){
  setError("Please fill in all fields.");
  return
}
else{
navigate('/login')
}

    const data = {
      name: name,
      email: email,
      password: password
    }
try {
  const api  = await axios.post(`https://prickly-cod-fedora.cyclic.app/signup`,data);
  alert("signup successful")
  console.log(api);
} catch (error) {
  console.log(error)
}
  }

  return (
    <div className={Style.container}>
      <div className={Style.inner}>
        <div>
          <img src={logo} className={Style.logo} />
          <p className={Style.welcome}>
            Embark on a Journey Beyond Boundaries – Explore, Dream, and Discover
            with Us!
          </p>
        </div>
          <form onSubmit={handleSubmit}>
        <div>
          <input
            className={Style.input}
            type="text"
            placeholder="Enter Your Name"
            value={name}
         onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <input
            className={Style.input}
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <input
            className={Style.input}
            type="password"
            placeholder="Enter Your Password"
            value={password}
         onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <br />
        <div>
          <p className={Style.dont}>{isError}</p>
        </div>
        <button
          className={Style.btn}
          type="submit"
          >
          Sign up
        </button>
            </form>
        <p>
          Already have an account?
          <span>
            <Link className={Style.link} to="/login">
              {" "}
              Login
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};
