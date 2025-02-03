//import React from 'react'
import pradeep from '../assets/IMAGES/pradeep.jpg'
import akshay from '../assets/IMAGES/akshay.jpg'
import harsha from '../assets/IMAGES/harsha.jpg'
import './css/navbar.css';

export default function About() {

  return (
    <>
    <div className="header-container">
        <h1 style={{ color: 'rgb(0, 0, 0)', fontSize: '90px' }}>
          <b>About Us</b>
        </h1>
      </div>

<div className="container">
    <div className="text-center">
        <h1><b>Our Mission</b></h1>
        <h4>The term Automobile Management System generally refers to a software application</h4>
        <h4>designed to efficiently manage various aspects of automobile-related operations within a dealership or
            service center</h4>
    </div>

    <div className="text-center">
        <h2><b>Our Team</b></h2>
        <br/>
    </div>

   
    <div className="row">
        <div className="col-md-3">
            <div className="card">
                <img src={pradeep} alt="Card 2 Image" className="card-img-top" />
                <div className="card-body">
                    <h3>Team Leader</h3>
                    <p>Name : T. Pradeep</p>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card">
                <img src={akshay} alt="Card 3 Image" className="card-img-top" />
                <div className="card-body">
                    <h3>Team Member</h3>
                    <p>Name : K. Akshay</p>
                </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card">
                <img src={harsha} alt="Card 4 Image" className="card-img-top" />
                <div className="card-body">
                    <h3>Team Member</h3>
                    <p>Name : P. Harsha Vardhan</p>
                </div>
            </div>
        </div>
    </div>
</div>

</>
  );
}
