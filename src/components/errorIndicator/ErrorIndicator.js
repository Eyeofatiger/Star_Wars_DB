import React from 'react';
import './ErrorIndicator.css';
import imagePlanet from './death-star.png';

const ErrorIndicator = ()=> {
    return(
        <div className="error-indicator">
            <img src={imagePlanet} alt="Error icon" />
            <span className="boom">BOOM!</span>
            <span>something has gone terribly wrong</span>
            <span>(but we alredy sent droids to fix it)</span>
        </div>
    );
}

export default ErrorIndicator;