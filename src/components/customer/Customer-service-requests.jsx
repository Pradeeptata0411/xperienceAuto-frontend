// import req from '../../assets/IMAGES/req.jpg';
// import './customercss/service.css';
// import { useState } from 'react';
// import axios from 'axios';

// function CustomerServiceRequestPage() {
//     const [serviceRequestFormData, setServiceRequestFormData] = useState({
//         serviceName: '',
//         serviceType: '',
//         serviceDate: '',
//         serviceTime: '',
//         descriptionOfService: '',
//         serviceStatus: 'false',
//         serviceOwnerMail: '',
//     });

//     const [message, setMessage] = useState('');

//     const changeData = (e) => {
//         const { name, value } = e.target;
//         setServiceRequestFormData({ ...serviceRequestFormData, [name]: value });
//     };

//     const RaiseServiceRequest = async (e) => {
//         e.preventDefault();
//         try {
//             const userEmail = localStorage.getItem("userEmail");

//             const requestData = {
//                 ...serviceRequestFormData,
//                 serviceOwnerMail: userEmail, // Add the email to the form data
//             };

//             const response = await axios.post(
//                 'http://localhost:5000/customer/serviceRequest',
//                 requestData
//             );
//             if (response.status === 201) {
//                 setMessage(response.data.message);
//                 setServiceRequestFormData({
//                     serviceName: '',
//                     serviceType: '',
//                     serviceDate: '',
//                     serviceTime: '',
//                     descriptionOfService: '',
//                     serviceStatus: 'false',
//                     serviceOwnerMail: '',
//                 });
//             } else {
//                 setMessage(response.data.message || 'Request Failed');
//             }
//         } catch (error) {
//             console.error('Error', error);
//             if (error.response) {
//                 setMessage(error.response.data.message || 'Request Failed');
//             } else {
//                 setMessage('An error occurred. Please try again.');
//             }
//         }
//     };

//     const today = new Date().toISOString().split('T')[0];

//     return (
//         <>
//             <div className="card">
//                 <span className="blink">
//                     <h5 style={{ color: 'green', textAlign: 'center' }}>{message}</h5>
//                 </span>
//                 <div className="card-header">
//                     <h2 style={{ textAlign: 'center' }}>Raise a Service Request</h2>
//                 </div>
//                 <div className="card-body">
//                     <div className="row">
//                         <div className="col-md-6 form-container">
//                             <form onSubmit={RaiseServiceRequest}>
//                                 <div className="form-group">
//                                     <label htmlFor="serviceName">Name</label>
//                                     <input
//                                         type="text"
//                                         name="serviceName"
//                                         placeholder="Enter service name"
//                                         id="serviceName"
//                                         className="form-control"
//                                         value={serviceRequestFormData.serviceName}
//                                         onChange={changeData}
//                                         required
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="serviceType">Service Type</label>
//                                     <select
//                                         id="serviceType"
//                                         name="serviceType"
//                                         className="form-control"
//                                         value={serviceRequestFormData.serviceType}
//                                         onChange={changeData}
//                                         required
//                                     >
//                                         <option value="" disabled>
//                                             Select Service Type
//                                         </option>
//                                         <option value="oil_change">Oil Change</option>
//                                         <option value="tire_rotation">Tire Rotation</option>
//                                         <option value="brake_service">Brake Service</option>
//                                     </select>
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="serviceDate">Date</label>
//                                     <input
//                                         type="date"
//                                         name="serviceDate"
//                                         id="serviceDate"
//                                         className="form-control"
//                                         min={today}
//                                         value={serviceRequestFormData.serviceDate}
//                                         onChange={changeData}
//                                         required
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="serviceTime">Time</label>
//                                     <input
//                                         type="time"
//                                         name="serviceTime"
//                                         id="serviceTime"
//                                         className="form-control"
//                                         value={serviceRequestFormData.serviceTime}
//                                         onChange={changeData}
//                                         required
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="descriptionOfService">Description</label>
//                                     <textarea
//                                         id="descriptionOfService"
//                                         name="descriptionOfService"
//                                         placeholder="Enter your description"
//                                         className="form-control"
//                                         rows="4"
//                                         value={serviceRequestFormData.descriptionOfService}
//                                         onChange={changeData}
//                                         required
//                                     ></textarea>
//                                 </div>
//                                 <button
//                                     type="submit"
//                                     className="btn btn-primary"
//                                     disabled={!serviceRequestFormData.serviceName}
//                                 >
//                                     Raise Request
//                                 </button>
//                             </form>
//                         </div>
//                         <div className="col-md-6 image-container">
//                             <img className="image" src={req} alt="Service Request" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default CustomerServiceRequestPage;



import req from '../../assets/IMAGES/req.jpg';
import './customercss/service.css';
import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';


function CustomerServiceRequestPage() {
    const [serviceRequestFormData, setServiceRequestFormData] = useState({
        serviceName: '',
        serviceType: '',
        subServiceType: '',
        serviceDate: '',
        serviceTime: '',
        descriptionOfService: '',
        serviceStatus: 'false',
        serviceOwnerMail: '',
    });

    const [message, setMessage] = useState('');
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; 


    if (!isLoggedIn) {
        return <Navigate to="/" replace />;
      }

    // 40 Service Types with 20 Sub-Services each
    const serviceOptions = {
        oil_change: [
            'Synthetic Oil Change', 'Conventional Oil Change', 'High Mileage Oil Change', 'Full Synthetic Oil Change',
            'Semi-Synthetic Oil Change', 'Diesel Oil Change', 'Oil Filter Replacement', 'High Performance Oil Change',
            'Eco-Friendly Oil Change', 'Custom Oil Change', 'Oil Pressure Check', 'Oil Leak Repair', 'Oil Pan Replacement',
            'Engine Flush', 'Cooling System Flush', 'Power Steering Fluid Change', 'Transmission Fluid Change', 'Differential Fluid Change',
            'Fuel System Cleaning', 'Timing Chain Replacement'
        ],
        tire_rotation: [
            'Front Tires', 'Rear Tires', 'All Tires', 'Seasonal Tire Change', 'Tire Balancing', 'Tire Alignment',
            'Tire Patching', 'Run Flat Tires', 'Off-Road Tires', 'Performance Tires', 'Low Profile Tires', 'Truck Tires',
            'SUV Tires', 'High-Performance Tires', 'Mud Tires', 'Winter Tires', 'All-Season Tires', 'Tire Pressure Check',
            'Tire Inspection', 'Tire Swap'
        ],
        brake_service: [
            'Brake Pads Replacement', 'Rotor Replacement', 'Brake Fluid Change', 'Brake Lines Inspection',
            'Brake Caliper Repair', 'Drum Brake Service', 'Disc Brake Service', 'ABS System Check', 'Brake Master Cylinder Repair',
            'Brake Fluid Bleeding', 'Handbrake Adjustment', 'Emergency Brake Service', 'Brake Noise Check', 'Brake Pedal Adjustment',
            'Parking Brake Cable Replacement', 'Anti-lock Brake System (ABS) Repair', 'Brake Booster Replacement',
            'Brake Shoe Replacement', 'Brake Drum Replacement', 'Brake Pad Shimming'
        ],
        engine_repair: [
            'Engine Diagnostics', 'Engine Overhaul', 'Engine Oil Leak Repair', 'Timing Belt Replacement', 'Engine Mount Replacement',
            'Cylinder Head Gasket Replacement', 'Piston Ring Replacement', 'Engine Valve Repair', 'Spark Plug Replacement',
            'Oil Pump Replacement', 'Camshaft Replacement', 'Crankshaft Replacement', 'Cylinder Head Replacement', 'Turbocharger Repair',
            'Fuel Injector Replacement', 'Throttle Body Cleaning', 'Timing Chain Replacement', 'Exhaust Valve Repair', 'Valve Lifters Adjustment',
            'Water Pump Replacement'
        ],
        transmission_service: [
            'Transmission Fluid Change', 'Transmission Repair', 'Transmission Filter Replacement', 'Clutch Replacement',
            'Torque Converter Repair', 'Shifter Repair', 'Transmission Seal Replacement', 'Transmission Mount Replacement',
            'CVT Transmission Service', 'Manual Transmission Service', 'Automatic Transmission Service', 'Transmission Control Module Repair',
            'Differential Fluid Change', 'Transmission Flush', 'Fluid Leak Repair', 'Gears Replacement', 'Clutch Pedal Adjustment',
            'Transmission Coolant Line Replacement', 'Overdrive Service', 'Clutch Slave Cylinder Replacement'
        ],
        battery_replacement: [
            'Battery Check', 'Battery Replacement', 'Battery Terminal Cleaning', 'Alternator Testing', 'Starter Motor Testing',
            'Battery Cable Replacement', 'Battery Hold-Down Replacement', 'Battery Voltage Test', 'Lead-Acid Battery Service',
            'Lithium-Ion Battery Replacement', 'Deep Cycle Battery Service', 'Marine Battery Service', 'Battery Charger Testing',
            'Battery Load Test', 'Battery Maintenance', 'Cold Cranking Amp Test', 'Voltage Regulator Check', 'Electrical System Diagnostics',
            'Starter Replacement', 'Battery Terminal Corrosion Removal'
        ],
        ac_repair: [
            'AC Refrigerant Recharge', 'AC Compressor Replacement', 'AC Blower Motor Repair', 'AC Condenser Replacement',
            'AC Evaporator Replacement', 'AC System Flush', 'AC Belt Replacement', 'AC Leak Test', 'AC Fan Repair',
            'Cabin Air Filter Replacement', 'AC Refrigerant Leak Repair', 'Heater Core Replacement', 'AC Hose Replacement',
            'Climate Control Unit Repair', 'AC Pressure Test', 'Blower Motor Resistor Replacement', 'Defrost System Repair', 'HVAC System Check',
            'AC System Performance Check', 'Freon Refill'
        ],
        wheel_alignment: [
            '2-Wheel Alignment', '4-Wheel Alignment', 'Camber Adjustment', 'Caster Adjustment', 'Toe Adjustment',
            'Suspension System Check', 'Steering Angle Reset', 'Wheel Balance Check', 'Alignment Calibration',
            'Alignment Check', 'Wheel Assembly Inspection', 'Wheel Straightening', 'Tire Wear Pattern Analysis', 'Caster and Camber Setup',
            'Alignment Recalibration', 'Alignment Geometry Check', 'Misalignment Inspection', 'Pothole Damage Inspection', 'Alignment Adjustment',
            'Suspension Component Replacement'
        ],
        exhaust_system: [
            'Exhaust Pipe Replacement', 'Catalytic Converter Replacement', 'Muffler Repair', 'Exhaust Manifold Replacement',
            'Exhaust Gasket Replacement', 'Exhaust Leak Detection', 'Exhaust System Inspection', 'Oxygen Sensor Replacement',
            'Resonator Replacement', 'Tailpipe Replacement', 'Exhaust Hanger Repair', 'Exhaust Valve Replacement', 'Exhaust Sound Check',
            'Downpipe Replacement', 'Exhaust Heat Shield Repair', 'EGR Valve Cleaning', 'Exhaust System Customization', 'Exhaust Tune-Up',
            'Emission Control Service', 'Exhaust System Flushing'
        ],
        power_steering: [
            'Power Steering Fluid Replacement', 'Power Steering Pump Replacement', 'Power Steering Belt Adjustment',
            'Power Steering Rack Replacement', 'Power Steering Hose Replacement', 'Power Steering Fluid Leak Repair', 'Steering Column Adjustment',
            'Hydraulic Steering System Check', 'Electric Power Steering Check', 'Steering Gearbox Replacement', 'Power Steering Pressure Hose Repair',
            'Rack and Pinion Replacement', 'Power Steering Motor Repair', 'Hydraulic Reservoir Replacement', 'Steering Angle Sensor Calibration',
            'Power Steering Flush', 'Power Steering Fluid Change', 'Rack Mounting Replacement', 'Steering Mechanism Inspection',
            'Power Steering System Repair'
        ],
        suspension_service: [
            'Shocks and Struts Replacement', 'Suspension System Inspection', 'Suspension Bushings Replacement', 'Ball Joint Replacement',
            'Control Arm Replacement', 'Suspension Linkage Repair', 'Coil Spring Replacement', 'Leaf Spring Replacement', 'Sway Bar Link Replacement',
            'Suspension Arm Replacement', 'Shocks and Struts Inspection', 'Suspension Damper Replacement', 'Air Suspension Service',
            'Strut Bearing Replacement', 'Strut Cartridge Replacement', 'Shock Absorber Replacement', 'Rear Suspension Repair', 'Suspension Alignment',
            'Suspension Coil Overhaul', 'Suspension Arm Bushing Replacement'
        ],
        radiator_replacement: [
            'Radiator Replacement', 'Radiator Flush', 'Radiator Leak Repair', 'Radiator Fan Replacement', 'Radiator Cap Replacement',
            'Radiator Hose Replacement', 'Coolant System Pressure Test', 'Coolant Flush', 'Cooling System Check', 'Water Pump Replacement',
            'Coolant Reservoir Replacement', 'Thermostat Replacement', 'Coolant Leak Detection', 'Radiator System Overhaul', 'Heater Core Flush',
            'Radiator Core Repair', 'Intercooler Replacement', 'Overflow Tank Replacement', 'Radiator Fan Shroud Repair', 'Thermostat Housing Replacement'
        ],
        fuel_system: [
            'Fuel Injector Cleaning', 'Fuel Pump Replacement', 'Fuel Filter Replacement', 'Fuel Pressure Test', 'Fuel Tank Repair',
            'Fuel Line Replacement', 'Fuel System Cleaning', 'Fuel Tank Strainer Replacement', 'Fuel Sensor Repair', 'Fuel Pressure Regulator Repair',
            'Fuel Tank Vent Valve Replacement', 'Fuel Pressure Relief Valve Replacement', 'Fuel Return Line Replacement', 'Fuel System Performance Check',
            'Fuel Tank Removal', 'Fuel Gauge Calibration', 'Fuel System Flush', 'Fuel Tank Filler Neck Replacement', 'Fuel Leak Repair',
            'Fuel Filter Installation'
        ],
        air_filter_replacement: [
            'Cabin Air Filter Replacement', 'Engine Air Filter Replacement', 'Cold Air Intake Installation', 'Air Filter Housing Cleaning',
            'K&N Filter Installation', 'Air Filter Cleaning', 'Custom Air Filter Installation', 'Cold Air Intake System Installation',
            'Air Intake Hose Replacement', 'Pre-Filter Replacement', 'Turbo Air Filter Cleaning', 'Engine Intake System Inspection',
            'Turbocharger Intake Filter Replacement', 'Air Flow Sensor Replacement', 'Intake Manifold Cleaning', 'Air Filter Seal Replacement',
            'Air Filter Removal', 'Air Filter Inspection', 'Air Filter Flow Check', 'Carburetor Air Filter Cleaning'
        ],
        serpentine_belt: [
            'Belt Replacement', 'Belt Tensioner Replacement', 'Belt Inspection', 'Belt Alignment Check', 'Belt Adjustment',
            'Belt Overhaul', 'Belt Slippage Repair', 'Belt Guard Replacement', 'Belt Tightening', 'Poly-V Belt Replacement',
            'Timing Belt Replacement', 'Serpentine Belt Pulley Replacement', 'Belt Wear Check', 'V-Ribbed Belt Repair', 'Multi-V Belt Replacement',
            'Belt Noise Reduction', 'Belt System Check', 'Automatic Belt Tensioner Repair', 'Belt Pulley Overhaul', 'Belt Squeal Repair'
        ],
        timing_belt: [
            'Timing Belt Replacement', 'Timing Chain Replacement', 'Timing Belt Tensioner Replacement', 'Timing Belt Tension Check',
            'Timing Chain Tension Check', 'Timing Gear Replacement', 'Timing Pulley Replacement', 'Timing Belt Wear Check',
            'Timing Chain Inspection', 'Timing Belt Replacement Kit', 'Timing Gear Inspection', 'Timing Cover Replacement', 'Timing Gear Lube',
            'Timing Chain Lubrication', 'Timing Mark Check', 'Valve Timing Check', 'Variable Valve Timing Repair', 'VVT Solenoid Replacement',
            'Timing System Overhaul', 'Timing Chain Guide Replacement'
        ],
        differential_service: [
            'Differential Fluid Change', 'Differential Inspection', 'Differential Gear Replacement', 'Differential Pinion Seal Replacement',
            'Differential Carrier Repair', 'Axle Shaft Inspection', 'Differential Bearing Replacement', 'Differential Fluid Leak Repair',
            'Differential Gear Oil Change', 'Axle Differential Overhaul', 'Limited Slip Differential Service', 'Locking Differential Repair',
            'Rear Differential Inspection', 'Differential Housing Replacement', 'Front Differential Service', 'Differential Case Repair',
            'Ring and Pinion Replacement', 'Differential Cross-Over Gear Replacement', 'Power-Lock Differential Check', 'Differential Rebuilding'
        ],
        alternator_replacement: [
            'Alternator Testing', 'Alternator Replacement', 'Alternator Belt Replacement', 'Alternator Brush Replacement',
            'Alternator Regulator Replacement', 'Voltage Regulator Repair', 'Alternator Diode Repair', 'Alternator Rotor Repair',
            'Alternator Wiring Check', 'Alternator Pulley Replacement', 'Alternator Overhaul', 'Generator Replacement',
            'Battery Charging System Check', 'Alternator Voltage Test', 'Alternator Coil Repair', 'Power Supply Check',
            'Alternator Mounting Bracket Replacement', 'Alternator Rotor Replacement', 'Alternator Field Coil Inspection', 'Alternator Bearing Replacement'
        ],
        clutch_service: [
            'Clutch Pedal Adjustment', 'Clutch Replacement', 'Clutch Slave Cylinder Replacement', 'Clutch Master Cylinder Replacement',
            'Clutch Fluid Check', 'Clutch Cable Replacement', 'Clutch Kit Installation', 'Clutch Pressure Plate Replacement',
            'Clutch Flywheel Resurfacing', 'Clutch System Bleeding', 'Clutch Disc Replacement', 'Clutch Alignment Tool Adjustment',
            'Clutch Release Bearing Replacement', 'Clutch Pedal Spring Replacement', 'Clutch Hydraulic System Repair',
            'Clutch Pressure Plate Adjustment', 'Dual Mass Flywheel Repair', 'Clutch Disc and Pressure Plate Overhaul', 'Clutch System Inspection',
            'Clutch Overhaul Kit Installation'
        ],
        tire_repair: [
            'Tire Patching', 'Tire Rotation', 'Tire Balancing', 'Tire Inspection', 'Tire Swap', 'Tire Blowout Repair',
            'Puncture Repair', 'Flat Tire Repair', 'Tire Valve Replacement', 'Tire Pressure Monitoring System Service', 'Run-Flat Tire Repair',
            'Tire Alignment Check', 'Tire Inflation', 'Tire Rebuilding', 'Tire Alignment', 'Wheel Repair', 'Tire Repairing Kit',
            'Sidewall Repair', 'Wheel Rim Repair', 'Tire Mounting'
        ],
        vehicle_diagnostics: [
            'Engine Diagnostics', 'OBD-II Scan', 'Transmission Diagnostics', 'Vehicle Electrical System Diagnostics', 'Suspension Diagnostics',
            'Brake System Diagnostics', 'AC System Diagnostics', 'Fuel System Diagnostics', 'Battery Check', 'Ignition System Diagnostics',
            'Sensor Check', 'ECU Diagnostics', 'Exhaust System Diagnostics', 'Air Filter Diagnostics', 'Throttle System Diagnostics',
            'Computer Diagnostic Check', 'Wheel Alignment Diagnostics', 'ABS System Diagnostics', 'Power Steering Diagnostics',
            'Transmission Fluid Diagnostics'
        ],
    };

    const changeData = (e) => {
        const { name, value } = e.target;
        setServiceRequestFormData({ ...serviceRequestFormData, [name]: value });
    };

    const RaiseServiceRequest = async (e) => {
        e.preventDefault();
        try {
            const userEmail = localStorage.getItem("userEmail");

            // Send subServiceType in place of serviceType
            const requestData = {
                ...serviceRequestFormData,
                serviceOwnerMail: userEmail, // Add the email to the form data
                serviceType: serviceRequestFormData.subServiceType, // Use subServiceType instead of main serviceType
            };

            const response = await axios.post(
                'http://localhost:5000/customer/serviceRequest',
                requestData
            );
            if (response.status === 201) {
                setMessage(response.data.message);
                setServiceRequestFormData({
                    serviceName: '',
                    serviceType: '',
                    subServiceType: '',
                    serviceDate: '',
                    serviceTime: '',
                    descriptionOfService: '',
                    serviceStatus: 'false',
                    serviceOwnerMail: '',
                });
            } else {
                setMessage(response.data.message || 'Request Failed');
            }
        } catch (error) {
            console.error('Error', error);
            if (error.response) {
                setMessage(error.response.data.message || 'Request Failed');
            } else {
                setMessage('An error occurred. Please try again.');
            }
        }
    };

    const today = new Date().toISOString().split('T')[0];

    // Show subcategory options based on selected service type
    const subServiceOptions = serviceOptions[serviceRequestFormData.serviceType] || [];

    return (
        <>
            <div className="card">
                <span className="blink">
                    <h5 style={{ color: 'green', textAlign: 'center' }}>{message}</h5>
                </span>
                <div className="card-header">
                    <h2 style={{ textAlign: 'center' }}>Raise a Service Request</h2>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 form-container">
                            <form onSubmit={RaiseServiceRequest}>
                                <div className="form-group">
                                    <label htmlFor="serviceName">Name</label>
                                    <input
                                        type="text"
                                        name="serviceName"
                                        placeholder="Enter service name"
                                        id="serviceName"
                                        className="form-control"
                                        value={serviceRequestFormData.serviceName}
                                        onChange={changeData}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="serviceType">Service Type</label>
                                    <select
                                        id="serviceType"
                                        name="serviceType"
                                        className="form-control"
                                        value={serviceRequestFormData.serviceType}
                                        onChange={changeData}
                                        required
                                    >
                                        <option value="" disabled>
                                            Select Service Type
                                        </option>
                                        {Object.keys(serviceOptions).map((key, index) => (
                                            <option key={index} value={key}>
                                                {key.replace('_', ' ').toUpperCase()}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Conditionally render Sub-Service Type dropdown */}
                                {serviceRequestFormData.serviceType && (
                                    <div className="form-group">
                                        <label htmlFor="subServiceType">Sub-Service Type</label>
                                        <select
                                            id="subServiceType"
                                            name="subServiceType"
                                            className="form-control"
                                            value={serviceRequestFormData.subServiceType}
                                            onChange={changeData}
                                            required
                                        >
                                            <option value="" disabled>
                                                Select Sub-Service Type
                                            </option>
                                            {subServiceOptions.map((subService, index) => (
                                                <option key={index} value={subService}>
                                                    {subService}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                )}

                                <div className="form-group">
                                    <label htmlFor="serviceDate">Date</label>
                                    <input
                                        type="date"
                                        name="serviceDate"
                                        id="serviceDate"
                                        className="form-control"
                                        min={today}
                                        value={serviceRequestFormData.serviceDate}
                                        onChange={changeData}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="serviceTime">Time</label>
                                    <input
                                        type="time"
                                        name="serviceTime"
                                        id="serviceTime"
                                        className="form-control"
                                        value={serviceRequestFormData.serviceTime}
                                        onChange={changeData}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="descriptionOfService">Description</label>
                                    <textarea
                                        id="descriptionOfService"
                                        name="descriptionOfService"
                                        placeholder="Enter your description"
                                        className="form-control"
                                        rows="4"
                                        value={serviceRequestFormData.descriptionOfService}
                                        onChange={changeData}
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={!serviceRequestFormData.serviceName}
                                >
                                    Raise Request
                                </button>
                            </form>
                        </div>
                        <div className="col-md-6 image-container">
                            <img className="image" src={req} alt="Service Request" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CustomerServiceRequestPage;
