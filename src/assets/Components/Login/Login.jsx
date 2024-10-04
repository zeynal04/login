import React from 'react'
import "../Login/login.css"
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import { MdLockOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

  return (

    <>

      <main>
        <section className="login-section">
         <div className="login-container">
            <form className="login-form">

                <span className="login-title">Login</span>
                 
                <span>Username</span>
                <div className="login-input">
                    <LuUser  className='username'/>
                    <input className='inp-user' type="text" placeholder="Type your username"/>
                </div>

                    <span>Password</span>
                <div className="login-input">
                    <input type="text" placeholder="Type your password"/>
                    <MdLockOutline className='lock' />
                </div>

                <div className="text-right">
                    <a href="">Forgot password?</a>
                </div>

                <button>LOGIN</button>

                <div className="text-center" onClick={() => navigate("/signUp")}>
                    <a href="">Or Sign Up Using</a>
                    {/* <span>Or Sign Up Using</span> */}
                </div>

                <div className="icons">
                    <a href="">
                    <FaFacebookF className='facebook' />
                    </a>
                    <a href="">
                    <FaTwitter className='twitter' />
                    </a>
                    <a href="">
                    <FaGoogle  className='google' />
                    </a>
                </div>

                <div className="text-bottom">
                <span class="txt1">Or Sign Up Using</span> <br />
                <a href="#" class="txt2">Sign Up</a>
                </div>


            </form>
         </div>
        </section>
    </main>
 
    </>
  )

}

export default Login