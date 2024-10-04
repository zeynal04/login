import React from 'react'
import "../SignUp/signUp.css"
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const navigate = useNavigate();
  return (
    <>
    <section>

        <div className="section-left"></div>

        <div className="section-right">
            <form action="">

                <h1>Sign Up</h1>

                <div className="form-input">
                    <span>Full Name</span>
                    <input type="text" placeholder='Name...' />
                </div>

                <div className="form-input">
                    <span>Email</span>
                    <input type="text" placeholder='Email address...' />
                </div>

                <div className="form-input">
                    <span>Username</span>
                    <input type="text" placeholder='Username...' />
                </div>

                <div className="form-input">
                    <span>Password</span>
                    <input type="password" placeholder='************' />
                </div>

                <div className="form-input">
                    <span>Repeat Password</span>
                    <input type="password" placeholder='************' />
                </div>

                <div className="check-box">
                    <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                    <input type="checkbox" />
                    <span>I agree to the <span className='terms'>Terms of User</span> </span>
                    </div>
                </div>

                <div className="sign-up">
                    <button>Sign Up</button>
                    <div className='sign-in' onClick={() => navigate("/")}>
                    <a href="">Sign In</a>
                    <FaLongArrowAltRight /> 
                    </div>
                </div>

            </form>
        </div>

    </section>
    </>
  )
}

export default SignUp