import { useForm } from 'react-hook-form';
import './FormValidate'
import React, { useState } from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'



const FormValidLib = () => {
  

    const {register,handleSubmit,formState: { errors },} = useForm();
    const onSubmit = (data) => {console.log(data);};

    // console.log(errors.user?.message)
    return (
        <div className="maincontainer">
            <form className='formcontainer'onSubmit={handleSubmit(onSubmit)}>
                <div className='signup'>SIGNUP</div>
                <div className="usercontainer">
                    <div className="usererror" >{errors.user?.message}</div>
                    <input className='userinput' type="text" placeholder='Username' {...register("user",{
                        required:{message:"Username is required",value:true},
                        minLength:{message:"Username must be 4 characters",value:4}
                        })}/>
                </div>
                <div className="passcontainer">
                    <div className="passerror">{errors.pass?.message}</div>
                    <input className='passinput' type="text" placeholder='Password' {...register("pass",{
                        required:{message:"Password is required",value:true},
                        minLength:{value:6,message:"Password must be min 6 characters"}
                        })}/>
                </div>
                <div className='btncontainer'>
                    <button className='submitbtn' type='submit'>SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default FormValidLib