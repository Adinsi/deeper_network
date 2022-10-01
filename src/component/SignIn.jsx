import React, { useState, useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import '../styles/componentstyles/SignIn.scss';
import { NavLink } from "react-router-dom";

import axios from 'axios'

const SignIn = () => {
   const { auth,setAuth } = useContext(AuthContext);
    const [email, Setemail] = useState('');
  const [password, Setpassword] = useState('');

    const [eye, seteye] = useState(true);
  
  const Eyeclick = () => {
    seteye(!eye);
    const code = document.getElementById("password");
    if (eye) {
     code.setAttribute("type", "password");
      seteye(false);
    } else {
      
       code.setAttribute("type", "text");
    }
   };
    const handleSubmit = async (e) => {

    e.preventDefault();
    axios.post('http://localhost:7500/api/user/login', {
    email: email,
    password: password
  })
  .then((res) => {
    
        if (res) {
         
          
         
        
        
             setAuth(res.data);
          console.log(auth);
        
          window.location = "/profil";
        
         

        }
      })
      .catch((err) => {
        console.log(err.response.data.error);
        if (err.response.data.error.includes('Email Incorrect')) {
          document.querySelector('.email.error').innerHTML = err.response.data.error;
         
        }

        else if ( err.response.data.error.includes('Mot de passe Incorrect')) {
           document.querySelector('.password.error').innerHTML = err.response.data.error;
        }
      
        
        
      });
  }
  return (
      
   
                          <div classNameName="overlay">
            
   

<form method='post' onSubmit={handleSubmit}>
   
   <div className="con">
   
   <header className="head-form">
      <h2>Se connecter</h2>

      <p>Connecter vous avec votre email et mot de passe</p>
   </header>
   
   <br></br>
   <div className="field-set">
     
      
         <span className="input-item">
           <i className="fa fa-user-circle"></i>
         </span>
        
         <input className="form-input" id="txt-input" type="text" placeholder="@deeperlife@gmail.com" name='email' onChange={(e) => Setemail(e.target.value)} value={email} required />
           <div className="email error">
           
         </div>
     
      <br></br>
     
        
     
      <span className="input-item">
        <i className="fa fa-key"></i>
       </span>
    
      <input className="form-input" type="password" placeholder="Votre mot de passe" id="password"  onChange={(e) =>  Setpassword(e.target.value)
         } value={password} required />
     

     <span>
        <i className="fa fa-eye"  onClick={Eyeclick}  class={eye ? "fa-solid fa-eye": "fa-solid fa-eye-slash" } aria-hidden="true"  type="button" id="eye"></i>
     </span>
      <div className="password error"></div>
     
      <br></br>
      <button className="log-in"> Se connecter </button>
   </div>
  
                <br></br>
                
  
     
  </div>
  

          <p><NavLink to='/'>Mot de passe oublié ?</NavLink></p>
          </form>
</div>
               
             )
          }
   
   

export default SignIn;