//import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f4f4f9',
      fontFamily: "'Arial', sans-serif",
    },
    form: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '300px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    input: {
      padding: '10px',
      fontSize: '1rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
      outline: 'none',
    },
    button: {
      padding: '10px',
      fontSize: '1rem',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      textAlign: 'center',
    },
    registerbutton: {
      padding: '10px',
      fontSize: '1rem',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      textAlign: 'center',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Login</h3>
      <form style={styles.form}>
        <input
          style={styles.input}
          placeholder="Email ID"
          type="email"
          name="email"
          required
        />
        <input
          style={styles.input}
          placeholder="Password"
          type="password"
          name="password"
          required
        />
        <button
          style={styles.button}
          type="submit"
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Login
        </button>
      </form>
      <br />
      <Link to="/customerRegister">
        <button style={styles.registerbutton}>Don&apos;t have an account? Register here</button>
      </Link>
    </div>
  );
}
