//import React from 'react'

import carousel1 from '../assets/IMAGES/carousel-1.jpg'
import carousel2 from '../assets/IMAGES/carousel-2.jpg'
import About from '../assets/IMAGES/about.png'


export default function Home() {
 

  return (
    <>
    <div className="container-fluid p-0">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
           
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
            </ol>

            <div className="carousel-inner">

                <div className="item active">
                    <img src={carousel1} alt="Los Angeles" />
                    <div className="carousel-caption">
                        <h4 className="str1"><b>SERVICE A CAR</b></h4>
                        <h1 className="str"><b>Best Car Services In Your Location</b></h1>
                    </div>
                </div>

                <div className="item">
                    <img src={carousel2} alt="Chicago" />
                    <div className="carousel-caption">
                        <h4 className="str1"><b>GET A CAR</b></h4>
                        <h1 className="str"><b>Quality Cars With Unlimited Miles</b></h1>
                    </div>
                </div>

            </div>

            
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>

    <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
            <h1 className="display-1 text-primary text-center"></h1>
            <h1 className="display-4 text-uppercase text-center mb-5 mobile-heading">Welcome To <span
                    className="text-primary">AUTOMOBILE
                    SERVICES</span></h1>
            <div className="row justify-content-center">
                <div className="col-lg-13 text-center">
                    <img className="img-fluid mb-6" src={About} alt=""/>
                </div>
            </div>
        </div>
        
    </div>

    <div className="footer">
        <p>&copy; 2023 XperienceAuto. All Rights Reserved.</p>
    </div>
    </>
  );
}
