import React, { useState } from 'react';
import AuthField from './common/authField';
import './../../../App.css';
import { Navigate, useNavigate } from "react-router-dom";


const defaultValue = {
  email: '',
  password: '',
  number: '',
  pincode: '',
  address: '',
  gender: 'Male',
  languages: []
}

const Signup = () => {
  const [authFields, setAuthFields] = useState(defaultValue);
  const navigate = useNavigate();

  const SubmitLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(authFields));
    setAuthFields({ username: "", email: "", password: "" });
    alert("Signup successful! Data saved in localStorage.");
    console.log('authFields', authFields);
    navigate('/login');
    
  };
  
    const onLanguageChange = (language) => {
      setAuthFields((prev) => ({
           
         ...prev,
         languages: prev.languages.includes(language)
         ? prev.languages.filter((lang) => lang !== language)
         : [...prev.languages, language]

        }))
      
    }
  return (
    <React.Fragment>
      <div className='h'>

      <form className='signup'>
        {/* Email Field */}
        <AuthField
          isLabelRequired={true}
          labelText={"Email"}
          fieldType={'email'}
          fieldAriaLabel="email"
          fieldPlaceHolder={'Enter Email'}
          onChange={(e) => setAuthFields({...authFields, email: e.target.value})} 
        />

        {/* Password Field */}
        <AuthField
          isLabelRequired={true}
          labelText={"Password"}
          fieldType={'password'}
          fieldAriaLabel="password"
          fieldPlaceHolder={'Enter Password'}
          onChange={(e) => setAuthFields({...authFields, password: e.target.value})} 
        />

        {/* Contact Field */}
        <AuthField
          isLabelRequired={true}
          labelText={"Contact"}
          fieldType={'number'}
          fieldAriaLabel="number"
          fieldPlaceHolder={'Contact number'}
          onChange={(e) => setAuthFields({...authFields, number: e.target.value})} 
        />

        {/* Pin code Field */}
        <AuthField
          isLabelRequired={true}
          labelText={"Pin code"}
          fieldType={'number'}
          fieldAriaLabel="number"
          fieldPlaceHolder={'Enter pin code'}
          onChange={(e) => setAuthFields({...authFields, pincode: e.target.value})} 
        />

        {/* Address Field */}
        <AuthField  
          isLabelRequired={true}
          labelText={"Address"}
          fieldType={"text"}
          fieldAriaLabel={"text"}
          fieldPlaceHolder={"Enter address"}
          onChange={(e) => setAuthFields({...authFields, address: e.target.value})} 
        />

        {/* Gender Selection */}
        <p className='gender'>Gender</p>
        <label>
          <input
            type="radio"
            value="Male"
            name="Gender"
            checked={authFields.gender === "Male"}
            onChange={(e) => setAuthFields({...authFields, gender: e.target.value})}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            value="Female"
            name="Gender"
            checked={authFields.gender === "Female"}
            onChange={(e) => setAuthFields({...authFields, gender: e.target.value})}
          />
          Female
        </label>
        {/* Language section */}

        <label style={{width: '100%', display: 'block'}}>Languages</label>
        <label>
  <input 
    type="checkbox" 
    name="language" 
    value="English"
    checked={authFields.languages.includes("English")} 
    onChange={() => onLanguageChange("English")} 
  /> 
  English
</label>

<label>
  <input 
    type="checkbox" 
    name="language" 
    value="Hindi"
    checked={authFields.languages.includes("Hindi")} 
    onChange={() => onLanguageChange("Hindi")} 
    /> 
  Hindi
</label>


        {/* Submit Button */}
        <div className='signb'>
          
          <button onClick={SubmitLogin}>Sign Up</button>
          
          
        </div>
      </form>
    </div>
    </React.Fragment>
  );
};

export default Signup;
