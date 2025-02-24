import React, { useState } from 'react'
import AuthField from './common/authField';
import './../../../App.css';
import { useNavigate } from 'react-router';

const LoginForm = () => {
    const [authFields, setAuthFields] = useState({email: " ",password: " "});
    const navigate = useNavigate();
    const SubmitLogin = (e) => {
        e.preventDefault();
        const StoredUser= JSON.parse(localStorage.getItem("userData"));
        if (StoredUser && StoredUser.email === authFields.email && StoredUser.password === authFields.password) {
            navigate("/dashboard");
        }
        else{alert("INVALID DATA");}
        console.log('authFields', authFields);
    }

    return(
        <React.Fragment>
            <div className='h'>

            <form  className='form1'>
                
                <AuthField 
                        isLabelRequired={true}
                    labelText={"Email"}
                    fieldType={'email'}
                    fieldAriaLabel="email"
                    fieldPlaceHolder={'Enter Email'}
                    onChange={(e) => setAuthFields({...authFields, email: e.target.value})} />
                <AuthField 
                    isLabelRequired={true}
                    labelText={"Password"}
                    fieldType={'password'}
                    fieldAriaLabel="password"
                    fieldPlaceHolder={'Enter Password'}
                    onChange={(e) => setAuthFields({...authFields, password: e.target.value})} />
                <div className='loginb'>
                    <button type="submit"
                        onClick={SubmitLogin}>Login</button>
                </div>
            </form>
            </div>
        </React.Fragment>
    )
}

export default LoginForm;
