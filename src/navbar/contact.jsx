//import React from 'react'

//import React from 'react'

export default function contact() {
  const styles = {
    container: {
      fontFamily: "'Arial', sans-serif",
      textAlign: "center",
      padding: "20px",
      backgroundColor: "#f4f4f9",
      color: "#333",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      maxWidth: "600px",
      margin: "20px auto",
    },
    heading: {
      color: "#4CAF50",
      fontSize: "2rem",
      marginBottom: "10px",
    },
    welcomeText: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#1E90FF",
    },
    infoSection: {
      marginTop: "20px",
      fontSize: "1.2rem",
    },
    info: {
      margin: "10px 0",
    },
    infoHighlight: {
      color: "#FF6347",
      fontStyle: "italic",
    },
    footer: {
      marginTop: "20px",
      fontSize: "0.9rem",
      color: "#555",
    },
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Welcome Student</h3>
      <p style={styles.welcomeText}>Let&apos;s start your learning journey!</p>
      <div style={styles.infoSection}>
        <p style={styles.info}>
          <span style={styles.infoHighlight}>Course: </span> Computer Science and Engineering
        </p>
        <p style={styles.info}>
          <span style={styles.infoHighlight}>Modules: </span> Data Structures, Web Development, AI-ML, and more.
        </p>
        <p style={styles.info}>
          <span style={styles.infoHighlight}>Upcoming Event: </span> Hackathon on 15th Jan 2025 contact
        </p>
      </div>
      <footer style={styles.footer}>
        Keep learning and exploring! 🚀
      </footer>
    </div>
  );
}

