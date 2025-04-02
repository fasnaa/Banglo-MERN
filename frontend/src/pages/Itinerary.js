// src/pages/Itinerary.js

import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  },
  title: {
    textAlign: 'center',
    marginBottom: '25px',
    fontSize: '28px',
    color: 'black',
  },
  itineraryList: {
    listStyleType: 'none',
    padding: 0,
  },
  itineraryItem: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
    color: 'black'
  },
  backButton: {
    display: 'block',
    marginTop: '20px',
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '4px',
    textDecoration: 'none'
  }
};

const Itinerary = () => {
  const location = useLocation();
  const itinerary = location.state?.itinerary || [];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your Customized Itinerary</h1>
      {itinerary.length === 0 ? (
        <p>No itinerary available. Please try generating one.</p>
      ) : (
        <ul style={styles.itineraryList}>
          {itinerary.map((item, index) => (
            <li key={index} style={styles.itineraryItem}>
              <strong>{item.time}:</strong> {item.activity}
            </li>
          ))}
        </ul>
      )}
      <Link to="/" style={styles.backButton}>Back to Planner</Link>
    </div>
  );
};

export default Itinerary;
