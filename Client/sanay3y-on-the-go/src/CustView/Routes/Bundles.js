import React from 'react'
import '../styles/Bundles.css'

const Bundles = ({bundles}) => {
  const handleBookBundle = (bundleID) => {
    // Add your booking logic here, e.g., navigate to a booking page, make an API request, etc.

    alert('bundle booked successfully')
  };
  return (
    <div className="bundle-page">
    <h1>Available Bundles</h1>
    <div className='bundle-grid'>
    {bundles.map((bundle) => (
      <div key={bundle.Header} className="bundle-card">
        <div className="bundle-header">
          <h2 className="bundle-name">{bundle.Header}</h2>
        </div>
        <div className="bundle-details">
          <p>Price: <span className="bundle-price">{bundle.Total_price} EGP</span></p>
          <p>{bundle.Description}</p>
          </div>
          <button className="book-button" onClick={() => handleBookBundle(bundle.Bundle_ID)}>
            Book Now
          </button>
        
      </div>
    ))}
    </div>
  </div>
  );
}

export default Bundles
