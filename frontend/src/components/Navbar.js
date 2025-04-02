import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: 'black',
      borderBottom: '1px solidrgb(0, 0, 0)',
    },
    logo: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: 'white',
    },
    links: {
      display: 'flex',
      gap: '15px',
    },
    link: {
      padding: '8px 8px',
      textDecoration: 'none',
      color: 'white',
      borderRadius: '10px',
      transition: 'background-color 0.3s',
    },
    loginButton: {
      backgroundColor: 'white',
      color: 'black',
      padding: '8px 16px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    }
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Banglo</div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/PlannerForm" style={styles.link}>Itinerary</Link>
        <Link to="/explore" style={styles.link}>Explore</Link>
      </div>
      <Link 
        to="/login" 
        style={styles.loginButton}
        onMouseOver={(e) => e.target.style.backgroundColor = 'grey'}
        onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
      >
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
