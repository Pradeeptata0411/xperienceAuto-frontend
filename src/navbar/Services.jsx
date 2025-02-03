//import React from 'react'

//import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import "./css/navbar.css";
import Login from './login';

export default function Services() {
  return (
    <>
      
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <br/>
          <br/>
          <h1 className="display-4 text-uppercase text-center mb-5">
            Our Services
          </h1>
          <br />
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="service-item active d-flex flex-column justify-content-center px-4 mb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center justify-content-center bg-custom-color ml-n4">
                    <i
                      className="fa fa-money-check text-secondary"
                      style={{color: 'white'}}
                    ></i>
                  </div>
                  <div className="service-number">01</div>
                </div>
                <h4 className="text-uppercase mb-3">Car Spare Parts</h4>

                <p className="m-0">
                  High-quality car spare parts for all makes and models,
                  ensuring reliable performance and safety on the road
                </p>
                <Link to="/Login" className="btn btn-primary mt-3">
                  Know More
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-2">
              <div className="service-item active d-flex flex-column justify-content-center px-4 mb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center bg-custom-color ml-n4"
                    style={{width: '80px', height: '80px'}}
                  >
                    <i className="fa fa-2x fa-money-check-alt text-secondary"></i>
                  </div>
                  <div className="service-number">02</div>
                </div>
                <h4 className="text-uppercase mb-3">Car Financing</h4>

                <p className="m-0">
                  Car financing provides the opportunity to purchase a vehicle
                  through affordable installment plans.
                </p>
                <Link to="/login" className="btn btn-primary mt-3">
                  Know More
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center bg-custom-color ml-n4"
                    style={{width: '80px', height: '80px'}}
                  >
                    <i className="fa fa-2x fa-car text-secondary"></i>
                  </div>
                  <div className="service-number">03</div>
                </div>
                <h4 className="text-uppercase mb-3">Car Inspection</h4>
                <p className="m-0">
                  Car inspection is a thorough examination of a vehicle&aposs
                  condition, ensuring safety, functionality.
                </p>
                <Link to="/login" className="btn btn-primary mt-3">
                  Know More
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center bg-custom-color ml-n4"
                    style={{width: '80px', height: '80px'}}
                  >
                    <i className="fa fa-2x fa-cogs text-secondary"></i>
                  </div>
                  <div className="service-number">04</div>
                </div>
                <h4 className="text-uppercase mb-3">Auto Repairing</h4>
                <p className="m-0">
                  Auto repairing: expert services to keep your car running
                  smoothly, from diagnostics to maintenance and repairs
                </p>
                <Link to="/login" className="btn btn-primary mt-3">
                  Know More
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center bg-custom-color ml-n4"
                    style={{width: '80px', height: '80px'}}
                  >
                    <i className="fa fa-2x fa-spray-can text-secondary"></i>
                  </div>
                  <div className="service-number">05</div>
                </div>
                <h4 className="text-uppercase mb-3">Auto Painting</h4>
                <p className="m-0">
                  Auto painting: Revitalize your appearance with professional
                  paintwork, color matching,finishing services.
                </p>
                <Link to="/login" className="btn btn-primary mt-3">
                  Know More
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-2">
              <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center bg-custom-color ml-n4"
                    style={{width: '80px', height: '80px'}}
                  >
                    <i className="fa fa-2x fa-pump-soap text-secondary"></i>
                  </div>
                  <div className="service-number">06</div>
                </div>
                <h4 className="text-uppercase mb-3">Auto Cleaning</h4>
                <p className="m-0">
                  Auto cleaning: Restore your shine and freshness with thorough
                  interior and exterior cleaning.
                </p>
                <Link to="/login" className="btn btn-primary mt-3">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>

        <Routes>
            <Route path='/Login' element={<Login/>}/>
        </Routes>
      </div>
    </>
  );
}
