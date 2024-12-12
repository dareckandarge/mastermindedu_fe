import React from 'react';
import '../styling/profile.css';

export function InfoCard({ image, description }) {
    // passed in as props (can hard code info)
    return (
        <div className="info-card">
            <img src={image} alt={`icon`} className="info-image" />
            <h3 className="info-description">{description}</h3>
        </div>
    );
}