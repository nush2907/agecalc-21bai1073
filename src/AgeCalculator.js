import React, { useState } from 'react';
import './AgeCalculator.css';

function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    // Calculate age logic here
    const birthDate = new Date(dob);
    const today = new Date();
    const ageInMilliseconds = today - birthDate;
    const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);

    setAge(Math.floor(ageInYears));
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <p>Enter your date of birth:</p>
      <div className="input-container">
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <button onClick={calculateAge} className="calculate-button">
          Calculate Age
        </button>
      </div>
      {age !== null && <p>Your age is: {age} years</p>}
    </div>
  );
}

export default AgeCalculator;
