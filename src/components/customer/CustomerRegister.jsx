import "./customercss/customercss.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CustomerRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    contact_no: "",
  });
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const customerRegistration = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://xperienceauto-backend.onrender.com/register",
        formData
      );
      if (response.status === 201) {
        setMessage(response.data.message);
        setFormData({
          name: "",
          email: "",
          password: "",
          gender: "",
          contact_no: "",
        });
      } else {
        setMessage(response.data.message || "Registration Failed");
      }
    } catch (error) {
      console.log("Error", error);
      if (error.response) {
        setMessage(error.response.data.message || "Registration Failed");
      } else {
        setMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <div>
        {/* <h3>{message}</h3> */}
        {/* <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div> */}

        <form onSubmit={customerRegistration}>
        <span className="blink">
                    <h5 style={{ color: 'green' }}>{message}</h5>
                </span>
          <h3>Registration</h3>

          <label htmlFor="full-name">
            <i className="fas fa-user"></i> Full Name
          </label>
          <input
            type="text"
            name="name"
            id="full-name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">
            <i className="fas fa-envelope"></i> Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            pattern=".+@gmail\.com"
            placeholder="Enter email"
            title="email format must be xxx@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="gender">
            <i className="fas fa-venus-mars"></i> Gender
          </label>
          <select
            name="gender"
            required
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="password">
            <i className="fas fa-lock"></i> Password
          </label>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"} // Toggle between text and password
              name="password"
              id="password"
              pattern="((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,30})"
              placeholder="Enter password"
              title="Password must contain at least one number [0-9], uppercase [A-Z], special character [!@#$%^&*], length > 8"
              value={formData.password}
              onChange={handleChange}
              required
              style={{ paddingRight: "30px" }} // Add padding to make space for the eye icon
            />
            <i
              className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: "#000",
              }}
              onClick={() => setShowPassword(!showPassword)} // Toggle visibility on icon click
            ></i>
          </div>

          <label htmlFor="phone">
            <i className="fas fa-phone"></i> Phone Number
          </label>
          <input
            type="number"
            name="contact_no"
            id="phone"
            pattern="[789][0-9]{9}"
            placeholder="Must be 10 digits"
            value={formData.contact_no}
            onChange={handleChange}
            required
          />

          <button type="submit" className="button-blue">
            Register
          </button>
          <br />
          <br />
          <span className="username">
            Already have an account?{" "}
            <Link to="/Login">
              <u>Login here</u>
            </Link>
          </span>
        </form>
      </div>
    </>
  );
}

export default CustomerRegistration;
