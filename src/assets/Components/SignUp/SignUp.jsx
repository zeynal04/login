import React from 'react'
import "../SignUp/signUp.css"
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { formRegisterSchema } from '../../schema/formRegisterSchema';
import axios from 'axios';


const SignUp = () => {

    const submit =(value,action) => {
        const postApi = async() => {
           await axios.post("https://67007c964da5bd2375542275.mockapi.io/users",value)
        }
        postApi();
        action.resetForm();
    }

    const {values,errors,handleChange,handleSubmit} = useFormik({
        initialValues: {
            fullname:"",
            email:"",
            username:"",
            password:"",
            repeatPassword:"",
            term:""
        },
        validationSchema:formRegisterSchema,
        onSubmit:submit
    })
    

    const navigate = useNavigate();

  return (
    <>
    <section>

        <div className="section-left"></div>

        <div className="section-right">
            <form action="" onSubmit={handleSubmit}>

                <h1>Sign Up</h1>

                <div className="form-input">
                     <label htmlFor="fullname">Full Name</label>
                    <input type="text" id='fullname' placeholder='Name...' value={values.fullname} onChange={handleChange} />
                    {errors.fullname && <p className='input-error' >{errors.fullname}</p>}
                </div>

                <div className="form-input">
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' placeholder='Email address...' value={values.email} onChange={handleChange} />
                    {errors.email && <p className='input-error' >{errors.email}</p>}
                </div>

                <div className="form-input">
                    <label htmlFor="username">Username</label>
                    <input type="text" id='username'  placeholder='Username...' value={values.username} onChange={handleChange} />
                    {errors.username && <p className='input-error' >{errors.username}</p>}
                </div>

                <div className="form-input">
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' placeholder='************' value={values.password} onChange={handleChange}/>
                    {errors.password && <p className='input-error' >{errors.password}</p>}
                </div>

                <div className="form-input">
                    <label htmlFor="repeatPassword">Repeat Password</label>
                    <input type="password" id='repeatPassword' placeholder='************' value={values.repeatPassword} onChange={handleChange} />
                    {errors.repeatPassword && <p className='input-error' >{errors.repeatPassword}</p>}
                </div>

                <div className="check-box" >
                    <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                    <input id='term'  type="checkbox" value={values.term} onChange={handleChange} />
                    {errors.term && <p className='input-error' >{errors.term}</p>}
                    <label htmlFor='term' >I agree to the <span className='terms'>Terms of User</span> </label>
                    </div>
                </div>

                <div className="sign-up">
                    <button type='submit' style={{cursor:"pointer"}}>Sign Up</button>
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