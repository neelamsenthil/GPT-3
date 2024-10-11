import React, { useContext } from 'react'
import './Login.css'
import { inputContext } from '../UseContext-Component/Context'
import cross from '../../assets/cross.png'

const Login = () => {
  const { signUp, setSignUp, setShowLogin } = useContext(inputContext)
  return (
    <div className="login-container">
      <div className='login'>
        <div className="login-img">
          <img onClick={() => setShowLogin(false)} src={cross} alt="" />
        </div>
        <div className="login-heading">
          <h1>{signUp}</h1>
        </div>
        <div className="login-inputs">
          {signUp === "Log in" ? <></> : <input type="text" placeholder='Enter Name' />}
          <input type="text" placeholder='Enter Email' />
          <input type="text" placeholder='Enter Password' />
        </div>

        <div className="login-btn">
          <button>{signUp === "Sign Up" ? "Create account" : "Log in"}</button>
        </div>
        <div className="para">
          {signUp === "Sign Up" ? <p>Already have an account? <span onClick={() => setSignUp("Log in")}>Login here</span></p>
            : <p>Create a new account? <span onClick={() => setSignUp("Sign Up")}>Click here</span></p>}

        </div>


      </div>


    </div>
  )
}

export default Login