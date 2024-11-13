import React from 'react';
import '../styling/profile.css';

export function Profile({ image, name, title, organization, languages, location, availability }) {
    // passed in as props (should get this info from the BE/DB)
    return (
        <div className="profile-card">
            <img src={image} alt={`${name}'s profile`} className="profile-image" />
            <div className="profile-details">
                <h3>{name}</h3>
                <p className="profile-title">{title} at {organization}</p>
                <p className="profile-languages">Languages: {languages}</p>
                <p className="profile-location">{location}</p>
                <button className="availability-button">{availability}</button>
            </div>
        </div>
    );
}