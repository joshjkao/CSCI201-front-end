import React from 'react'
import {Typewriter, Cursor } from 'react-simple-typewriter'
import "./login.css"


const Login = () => { 
  const wordsToAdd = ["cute dog photos ", "adorable pet moments",
  "paw-some adventures",
  "pet-friendly hangouts",
  "furry friend stories",
  "tail-wagging fun",
  "meow-tastic photos",
  "feathered friend updates",
  "snuggle time memories",
  "pet fashion inspiration",
  "whisker-twitching joy",
  "pet parent tips",
  "fetch-tastic playdates",];
  return (
    <div className="login"> 
    <div className="loginWrapper"> 
      <div className="loginLeft">
        <h3 className="loginLogo"> petaByte</h3>
        <span className="loginDesc">
            Connect with other pet lovers and share{' '}
            <span className='bold-text'>
            <Typewriter
              words={wordsToAdd}
              loop
              cursor={false}
              delaySpeed={1500}
              delay={1000} />
            <Cursor/>
            </span>
            on petaByte.
          </span>
        </div>
      <div className="loginRight">
        <div className="loginBox">
          <input placeholder="Email" className="loginInput"/>
          <input placeholder="Password" className="loginInput"/>
          <button className='loginButton'>Log in</button>
          <span className='loginForgot'>Forgot Password?</span>
          <button className='loginRegisterButton'> Create a new account</button>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Login;
