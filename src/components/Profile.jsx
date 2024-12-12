import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/profile.css';

export function Profile({ image, name, title, organization, languages, location, availability }) {
    // passed in as props (should get this info from the BE/DB)
    // <Link to={`/mentors/${name}`}>
    return (
        <div className="profile-card">
            <img src={image} alt={`${name}'s profile`} className="profile-image" />
            <div className="profile-details">
                <h3>{name}</h3>
                <p className="profile-title">{title} at {organization}</p>
                <p className="profile-languages">Languages: {languages}</p>
                <p className="profile-location">{location}</p>
                <Link to="/mentors/mentorName">
                    <button className="availability-button">{availability}</button>
                </Link>
            </div>
        </div>
    );
}