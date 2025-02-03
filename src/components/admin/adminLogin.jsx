import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AdminLogin({ setIsLoggedIn }) { 
    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
        userName: '',
        password: '',
    });


    
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const adminLogin = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('https://xperienceauto-backend.onrender.com/admin/adminLogin', formData);
            if (response.status === 200) {
                const userName = response.data.userName; 
                const email = response.data.userEmail;
                const address = response.data.userAddress;
                setMessage(`Login Successful ${userName} 😊😊`);
                localStorage.setItem("isLoggedIn", "true"); // Persist login state
                localStorage.setItem("userName", userName);
                localStorage.setItem("userRole", "admin");
                localStorage.setItem("userEmail",email);
                localStorage.setItem("userAddress",address);
                setTimeout(() => {
                    navigate('/admin/adminHome'); // Navigate to admin home
                }, 1000);

                // Force a page reload after navigation
                setTimeout(() => {
                    window.location.reload(); // Reload the page after navigation
                }, 1000);
            } else {
                setMessage(response.data.message || 'Login Failed');
            }
        } catch (error) {
            console.error('error', error);
            if (error.response) {
                setMessage(error.response.data.message || "Invalid credentials");
            } else {
                setMessage("An error occurred, please try again");
            }
        }
    };
    

    return (
        <div>
            <form style={{ marginTop: '50px' }} onSubmit={adminLogin}>
                <span className="blink">
                    <h5 style={{ color: 'red' }}>{message}</h5>
                </span>
                <h3>Admin Login Here</h3>

                <label htmlFor="userName"><i className="fa fa-user-alt"></i> UserName</label>
                <input
                    type="text"
                    name="userName"
                    placeholder="userName"
                    id="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="password"><i className="fas fa-lock"></i> Password</label>
                <div style={{ position: 'relative' }}>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={{ paddingRight: '30px' }}
                    />
                    <i
                        className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
                        style={{
                            position: 'absolute',
                            right: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            cursor: 'pointer',
                            color: '#000'
                        }}
                        onClick={() => setShowPassword(!showPassword)}
                    ></i>
                </div>

                <button type="submit" className="button-blue">Log In</button>
            </form>
        </div>
    );
}
