//import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import  "./css/Register.css"


function Register(){


  const[formdata , setFormData]= useState({
    name:'',
    email:'',
    password:'',
  });


  const [message , setMessage] = useState("");

  const handleChange = (e) =>{
      const{name,value}=e.target;
      setFormData({...formdata,[name]:value});
  }




  const handleSubmit = async(e) =>{
      e.preventDefault();

      try{
          const response = await axios.post("http://localhost:5000/register",formdata);

          if (response.status === 201) { // Check for status 201 (Created)
            setMessage(response.data.message);
            setFormData({ name: '', email: '', password: '' });
          } else {
            setMessage(response.data.message || 'Registration Failed');
          }          
      }catch(error){
          console.error("Error",error);

          if(error.response){
            setMessage(error.response.data.message || 'Registration Failed');
          }else{
            setMessage('An error occurred. Please try again.');
          }
      }
  }

    return(

      <div className="register-container">
          <h3>Register</h3>
          {message && <p className="register-message">{message}</p>}
          <form className="register-form" onSubmit={handleSubmit}>
              <input type="text" name="name" value={formdata.name} placeholder="enter your name" onChange={handleChange} required/>
              <input type="text" name="email" value={formdata.email} placeholder="enter your email" onChange={handleChange} required />
              <input type="text" name="password" value={formdata.password} placeholder="enter you password" onChange={handleChange} required />
              <button type="submit">Register</button>
          </form>
      </div>
    );
}


export default Register