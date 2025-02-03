/* eslint-disable no-unused-vars */
import { BrowserRouter } from 'react-router-dom'
import CustomerNavbar from './customerNavbar';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import homelog1 from '../../assets/IMAGES/homelog1.jpeg'
import homepg from '../../assets/IMAGES/homepg.webp'
import homelog2 from '../../assets/IMAGES/homelog2.jpeg'
import homelog3 from '../../assets/IMAGES/homelog3.png'
import homelog4 from '../../assets/IMAGES/homelog4.jpeg'
import homelog5 from '../../assets/IMAGES/homelog5.webp'
import homelog6 from '../../assets/IMAGES/homelog6.png'
import './customercss/customerhome.css'


function CustomerHome() {
    const [userName, setUserName] = useState("");
    const [userEmail , setUserEmail]=useState("");
    const [userNumber , setContactNumber]=useState("");
    const [userGender , setGender] = useState("");



    const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  

    useEffect(() => {
        const storedName = localStorage.getItem("userName");
        const storedEmail = localStorage.getItem("userEmail");
        const storedNumber = localStorage.getItem("userNumber");
        const storedGender = localStorage.getItem("userGender");

        
        console.log("Fetched userName:", storedName); // Debugging line
        if (storedName) {
            setUserName(storedName);
            setUserEmail(storedEmail);
            setContactNumber(storedNumber);
            setGender(storedGender);
        }
    }, []);




React.useEffect(() => {
    const presentYear = new Date().getFullYear();
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
      yearElement.textContent = presentYear;
    } else {
      console.error('Element with ID "current-year" not found.');
    }
  }, []);



  const handleSendMessage = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://xperienceauto-backend.onrender.com/send-email', {
        userEmail,
        message,
      });
      setResponse(res.data.success);
    } catch (err) {
      setResponse(err.response?.data?.error || 'Failed to send email');
    }
  };

    return (
        <>           
            <header className="header">
                {/* <img className="header-image" src={homepg} alt="Architecture" /> */}
                <div className="header-overlay"></div>
                <div className="header-content" style={{ marginTop: '110px'}}>
                    <h1 >Welcome &quot;<b style={{ color: ' #FF5733' }}>{userName} 😊😊</b>&quot;</h1>
                    <h3>Rev up your <b style={{ color: ' #FF5733' }}>dreams with</b> the ultimate <b
                        style={{ color: ' #FF5733' }}>AutoMobile Experience</b> .</h3>
                </div>
            </header>

            <section className="partner-logos">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-6 col-sm-4 col-md-2">
                            <div className="partner-logo">
                                <img src={homelog1} alt="Partner 1" className="img-responsive" />
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-2">
                            <div className="partner-logo">
                                <img src={homelog2} alt="Partner 2" className="img-responsive" />
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-2">
                            <div className="partner-logo">
                                <img src={homelog3} alt="Partner 1" className="img-responsive" />
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-2">
                            <div className="partner-logo">
                                <img src={homelog4} alt="Partner 2" className="img-responsive" />
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-2">
                            <div className="partner-logo">
                                <img src={homelog5} alt="Partner 1" className="img-responsive" />
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-4 col-md-2">
                            <div className="partner-logo">
                                <img src={homelog6} alt="Partner 2" className="img-responsive" />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container-fluid py-5">
                <h2 style={{ textAlign: 'center', color: '#FF5733' }}><b>OUR SERVICES</b></h2><br /><br />
                <div className="container pt-5 pb-3">
                    <div className="row mt-3">
                        <div className="col-lg-4 mb-2">
                            <div className="d-flex align-items-center bg-light p-4 mb-4"
                                style={{height: '150px',backgroundColor:' #cdd4f0' }}>
                                <div className="d-flex align-items-center justify-content-center"
                                    style={{width: '100px', height: '100px', backgroundColor:' #FF5733' , marginTop: '25px'}}>
                                    <i className="fa fa-3x fa-headset text-white" style={{marginTop: '30px'}}></i>
                                </div>
                                <div style={{marginTop: '-85px' , marginLeft: '30px' }}>
                                    <h4 className="text-uppercase m-0" style={{color: '#2B2E4A' , fontSize: '25px' }}><b>24/7
                                        AutoMobile<br /> Service Support</b></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-2">
                            <div
                                className="d-flex align-items-center bg-secondary p-4 mb-4"
                                style={{
                                    height: "150px",
                                    backgroundColor: "#2B2E4A",
                                }}
                            >
                                <div
                                    className="d-flex align-items-center justify-content-center"
                                    style={{
                                        width: "100px",
                                        height: "100px",
                                        backgroundColor: "#FF5733",
                                        marginTop: "25px",
                                    }}
                                >
                                    <i
                                        className="fa fa-3x fa-car text-white"
                                        style={{
                                            marginTop: "30px",
                                        }}
                                    ></i>
                                </div>
                                <div
                                    style={{
                                        marginTop: "-85px",
                                        color: "#ddd",
                                        marginLeft: "35px",
                                    }}
                                >
                                    <h4
                                        className="text-light text-uppercase m-0"
                                        style={{
                                            color: "#ffffff",
                                            fontSize: "25px",
                                        }}
                                    >
                                        <b>All types of Spare <br /> Parts Available</b>
                                    </h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-2">
                            <div className="d-flex align-items-center bg-light p-4 mb-4"
                                style={{ height: '150px', backgroundColor: '#cdd4f0' }}>
                                <div className="d-flex align-items-center justify-content-center"
                                    style={{ width: '100px', height: '100px', backgroundColor: '#FF5733', marginTop: '25px' }}>
                                    <i className="fa fa-3x fa-map-marker-alt text-white" style={{ marginTop: '30px' }}></i>
                                </div>
                                <div style={{ marginTop: '-85px', marginLeft: '30px' }}>
                                    <h4 className="text-uppercase m-0" style={{ color: '#2B2E4A', fontSize: '25px' }}><b>Lots Of
                                        Branches<br />in India</b></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container contact-section">
                <h2 style={{textAlign: 'center', color:' #FF5733'}}><b>CONTACT</b><b style={{color: '#000000'}}> US</b></h2><br /><br />
                <div className="row">
                    <div className="col-md-6">
                        <div className="contact-form">
                            {/* <form action="#">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="name">Your Name</label>
                                            <input type="text" className="form-control" name="contact_name" id="name" value={userName}   readOnly disabled/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="email">Your Email</label>
                                            <input type="email" className="form-control" name="contact_email" id="email" value={userEmail} readOnly disabled/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" className="form-control" name="contact_subject" id="subject" placeholder="Enter the subject" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea className="form-control" name="contact_message" id="message" rows="4"
                                        placeholder="Enter your message"></textarea>
                                </div>
                                <button type="submit" className="btn btn-custom">Send Message</button>
                            </form> */}
                            <form action="#" onSubmit={handleSendMessage}>
                                    <div className="row">
                                        <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="name">Your Name</label>
                                            <input
                                            type="text"
                                            className="form-control"
                                            name="contact_name"
                                            id="name"
                                            value={userName}
                                            readOnly
                                            disabled
                                            />
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="email">Your Email</label>
                                            <input
                                            type="email"
                                            className="form-control"
                                            name="contact_email"
                                            id="email"
                                            value={userEmail}
                                            readOnly
                                            disabled
                                            />
                                        </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Your Message</label>
                                        <textarea
                                        className="form-control"
                                        name="contact_message"
                                        id="message"
                                        placeholder="Enter your message here"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        ></textarea>
                                    </div>
                                    <button typ e="submit" className="btn btn-primary mt-3">
                                        Send Message
                                    </button>
                                    </form>
                                    {response && <div>{response}</div>}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="contact-info">
                            <h3>Contact Information</h3>
                            <p><i className="fas fa-map-marker-alt" style={{ color: '#FF5733' }}></i> Vaddeswaram, Vijayawada, AP</p>
                            <p><i className="fas fa-envelope" style={{ color: '#FF5733' }}></i> XperienceAuto@gmail.com</p>
                            <p><i className="fas fa-phone" style={{ color: '#FF5733' }}></i> 8639555561, 7207294455</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
            <p>&copy; <span id="current-year"></span> XperienceAuto. All Rights Reserved.</p>
            </div>
        </>
    );
}


export default CustomerHome