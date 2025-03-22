import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <h2>Meet The Team</h2>
      <p>Click on any of our headshots to visit our LinkedIns!</p>
      <div className="team-grid">
        <div className="team-member">
          <a href="https://www.linkedin.com/in/sharvsave" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/sharv.jpeg`} alt="Team Member 1" className="team-headshot" />
          </a>
          <div className="member-info">
            <p className="member-name">Name: Sharv Save</p>
            <p className="role">Role: Backend + ML Engineer</p>
          </div>
        </div>
        <div className="team-member">
          <a href="https://www.linkedin.com/in/manish-kota-ab4018217" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/manish.jpeg`} alt="Team Member 2" className="team-headshot" />
          </a>
          <div className="member-info">
            <p className="member-name">Name: Manish Kota</p>
            <p className="role">Role: ML Engineer + Data Scientist</p>
          </div>
        </div>
        <div className="team-member">
          <a href="https://www.linkedin.com/in/ashank-awasthy-5063b8330" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/ashank.jpeg`} alt="Team Member 3" className="team-headshot" />
          </a>
          <div className="member-info">
            <p className="member-name">Name: Ashank Awasthy</p>
            <p className="role">Role: Design + Frontend Engineer</p>
          </div>
        </div>
        <div className="team-member">
          <a href="https://www.linkedin.com/in/ahmed-zeeshan-1422a0270" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/ahmed.jpeg`} alt="Team Member 4" className="team-headshot" />
          </a>
          <div className="member-info">
            <p className="member-name">Name: Ahmed Zeeshan</p>
            <p className="role">Role: Design + Frontend Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
