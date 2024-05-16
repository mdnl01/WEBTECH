import React, { useState } from 'react'
import './FormValidate.css'


const FormValidate = () => {


    let[formData,setFormData]=useState({user:"",pass:""})
    let[err,setErr]=useState({})


    function setData({target:{value,name}}){
        setFormData({...formData,[name]:value})
    }

    // console.log(formData);

    function submitData(e){
        e.preventDefault()
        setErr(Validate(formData))
    }

    function Validate(formData){
        let error={}
        if(formData.user=='')
        {
            error.usererror="Username Mandatory"
        }
        else if(formData.user.length<=4)
        {
            error.usererror="Username must be greater 4 characters"
        }
        // !PASSERRORS
        if(formData.pass=='')
        {
            error.passerror="Password Mandatory"
        }
        else if(formData.pass.length<=6)
        {
            error.passerror="Password must be minimum 6characters"
        }

        // console.log(error)
        return error

    }

    return (
        <div className="maincontainer">
            <form className='formcontainer' onSubmit={submitData}>
                <div className='signup'>SIGNUP</div>
                <div className="usercontainer">
                    <div className="usererror" style={err.usererror ? { display: "block" } : { display: "none" }}>{err.usererror}</div>
                    <input className='userinput' type="text" placeholder='Username' name='user' onChange={setData} />
                </div>
                <div className="passcontainer">
                    <div className="passerror" style={err.passerror ? { display: "block" } : { display: "none" }}>{err.passerror}</div>
                    <input className='passinput' type="text" placeholder='Password' name='pass' onChange={setData} />
                </div>
                <div className='btncontainer'>
                    <button className='submitbtn' type='submit'>SUBMIT</button>
                </div>
            </form>
        </div>
    )
}

export default FormValidate