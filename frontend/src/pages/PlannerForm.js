import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const interests = [
  'Technology',
  'Food',
  'Culture',
  'Nature',
  'Shopping',
  'Art',
  'Nightlife'
];

const styles = {
  body: {
    backgroundColor: 'black'
  },
  container: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '30px'
  },
  title: {
    color: 'black',
    textAlign: 'center',
    marginBottom: '25px',
    fontSize: '24px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    marginBottom: '8px',
    color: '#333',
    fontWeight: 'bold'
  },
  input: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px'
  },
  interestsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px'
  },
  interestTag: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textAlign: 'center'
  },
  selectedInterestTag: {
    backgroundColor: 'grey',
    color: 'white',
  },
  submitButton: {
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    padding: '12px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease'
  },
  submitButtonHover: {
    ':hover': {
      backgroundColor: '#cc0029'
    }
  }
};

function PlannerForm() {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [budget, setBudget] = useState('');
  const [availableTime, setAvailableTime] = useState('');
  const navigate = useNavigate();

  const handleInterestToggle = (interest) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(item => item !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = {
      budget,
      availableTime,
      interests: selectedInterests,
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/day-planner/generate-itinerary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
  
      const data = await response.json();
  
      if (response.ok) {
        navigate('/Itinerary', { state: { itinerary: data.itinerary } });
      } else {
        console.error('Error generating itinerary:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Plan Your Day in Bangalore</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="budget" style={styles.label}>Budget (₹):</label>
            <input
              type="number"
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="Enter your budget"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="availableTime" style={styles.label}>Available Time (hours):</label>
            <input
              type="number"
              id="availableTime"
              value={availableTime}
              onChange={(e) => setAvailableTime(e.target.value)}
              placeholder="Enter available hours"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Interests:</label>
            <div style={styles.interestsGrid}>
              {interests.map((interest) => (
                <label
                  key={interest}
                  style={{
                    ...styles.interestTag,
                    ...(selectedInterests.includes(interest) ? styles.selectedInterestTag : {})
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selectedInterests.includes(interest)}
                    onChange={() => handleInterestToggle(interest)}
                    style={{ display: 'none' }}
                  />
                  {interest}
                </label>
              ))}
            </div>
          </div>
          <Link
            to="/Itinerary"
            state={{
              budget,
              availableTime,
              interests: selectedInterests
            }}
          >
            <button
              type="submit"
              style={{
                ...styles.submitButton,
                ':hover': styles.submitButtonHover[':hover']
              }}
            >
              Generate Itinerary
            </button>
          </Link>

        </form>
      </div>
    </div>
  );
}

export default PlannerForm;