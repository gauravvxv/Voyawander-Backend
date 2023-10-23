import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import Style from "../Login/Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setUserLogin } from "../../Redux/auth/action";
import logo from "../../Images/logo_website.png";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleForm = async (e) => {
    e.preventDefault();


    if (!email || !password) {
      setError("Please fill all the fields")
      return
    }
    else{
      navigate("/")
    }

      const data = {
        email: email,
        password: password
      }

    try {
      const api = await axios.post(`https://weak-plum-pike-boot.cyclic.app/login`, data);
      console.log(api.data)
      setError(api.data)
      console.log(api.data.token)
      localStorage.setItem("token" , api.data.token)
    } catch (error) {
      console.log(error);
    }
  }


  const handleSignup = () => {
    navigate("/signup")
  }

  return (
    <div className={Style.container}>
      <div className={Style.inner}>
        <div>
          <img src={logo} className={Style.logo} />
          <h1 className={Style.welcome}>Welcome Back</h1>
        </div>
        <form onSubmit={handleForm}>
          <div>
            <input
              className={Style.input}
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div>
            <input
              className={Style.input}
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </div>
          <div>
            <p className={Style.dont}>{error}</p>
          </div>
          <button
            className={Style.btn}
            type="submit"
          >
            Login
          </button>
        </form>
        <p>⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ or ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯</p>
        <div className={Style.appLogo}>
          <img
            className={Style.images}
            // onClick={handleGoogle}
            src="https://slackmojis.com/emojis/195-google/download"
          />
          <img
            className={Style.images}
            src="https://www.freeiconspng.com/thumbs/facebook-logo-png/facebook-logo-3.png"
          />
          <img
            className={Style.images}
            src="https://twemoji.twitter.com/content/dam/twemoji-twitter/Twitter_Social_Icon_Circle_Color.png.twimg.1920.png"
          />
        </div>
        <p className={Style.dont}>Don't have an account?</p>
        <button className={Style.btn} onClick={handleSignup}>
          Sign up
        </button>
        <p className={Style.dont}>Create an account to join us!</p>
      </div>
    </div>
  );
};
