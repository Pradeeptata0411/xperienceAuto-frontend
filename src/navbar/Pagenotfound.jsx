import React from 'react';
import PageNotFoundImage from '../assets/IMAGES/gifs/404.gif';

function PageNotFound() {
  return (
    <div style={styles.container}>
      
      <img src={PageNotFoundImage} alt="404 - Page Not Found" style={styles.image} />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  image: {
    width: '90%', // Makes the image fit the width of the container.
    height: 'auto', // Maintains the aspect ratio of the image.
    marginBottom: '20px',
    maxWidth: '1200px', // Optional: Adds a maximum width for larger screens.
  },
  text: {
    fontSize: '1rem',
    maxWidth: '400px',
  },
};

export default PageNotFound;
