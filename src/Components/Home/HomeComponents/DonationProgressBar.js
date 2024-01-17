import React from 'react';
import './DonationProgressBar.css'; // Make sure to create this CSS file and add your styles

export const DonationProgressBar = ({ currentDonation, goal }) => {
  const progress = Math.min((currentDonation / goal) * 100, 100); // Calculate the progress percentage

  return (
      <div className="progress-bg">
        <div className="progress-bar" style={{ width: `${progress}%` }}>
          <h3 className="raised">${currentDonation.toLocaleString()} raised</h3>
        </div>
        <h3 className="goal">Goal: ${goal.toLocaleString()}</h3>
      </div>
  );
};