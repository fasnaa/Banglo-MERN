import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const styles = {
    section: {
      height: '100vh',
      width: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textAlign: 'center'
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(62, 60, 60, 0.5)'
    },
    content: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '800px',
      padding: '0 20px'
    },
    title: {
      fontSize: '48px',
      marginBottom: '20px',
      color:'black'
    },
    description: {
      fontSize: '24px',
      marginBottom: '30px',
      color:'white'
    },
    button: {
      color: 'black',
      padding: '12px 24px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '18px',
      cursor: 'pointer',
      textDecoration: 'none'
    },
    title1 :{
      fontSize: '54px',
      marginBottom: '20px',
      color:'black'
    }
  };

  return (
    <div>
      {/* Section 1 */}
      <div 
        style={{
          ...styles.section,
          backgroundImage: 'url(/images/img1.jpeg)'
        }}
      >
        <div style={styles.overlay}></div>
        <div style={styles.content}>
          <h1 style={styles.title1}>Banglo</h1>
          <p style={styles.description}>Your ultimate guide to exploring the city</p>
        </div>
      </div>

      {/* Section 2 */}
      <div 
        style={{
          ...styles.section,
          backgroundImage: 'url(/images/img3.jpeg)'
        }}
      >
        <div style={styles.overlay}></div>
        <div style={styles.content}>
          <h1 style={styles.title}>Create Your Perfect Itinerary</h1>
          <p style={styles.description}>Plan your day with personalized recommendations</p>
          <Link to="/PlannerForm">
            <button style={styles.button}>Plan Your Day</button>
          </Link>
        </div>
      </div>

      {/* Section 3 */}
      <div 
        style={{
          ...styles.section,
          backgroundImage: 'url(/images/img2.jpeg)'
        }}
      >
        <div style={styles.overlay}></div>
        <div style={styles.content}>
          <h1 style={styles.title}>Unique Experiences Await</h1>
          <p style={styles.description}>Uncover hidden gems and local favorites</p>
          <Link to="/explore">
            <button style={styles.button}>Explore More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
