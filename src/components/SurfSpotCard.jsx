import React from 'react'

const SurfSpotCard = ({ spot, onBookNow }) => {
  const { name, location, description, image, waveHeight, difficulty, pricePerDay, rating, reviews, included } = spot

  return (
    <div className="surf-spot-card">
      <div className="card-image">
        <img src={image} alt={name} />
        <div className="difficulty-badge">{difficulty}</div>
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3>{name}</h3>
          <div className="rating">
            <span className="stars">⭐ {rating}</span>
            <span className="review-count">({reviews} reviews)</span>
          </div>
        </div>
        <p className="location">📍 {location}</p>
        <p className="description">{description}</p>
        
        <div className="wave-info">
          <span className="wave-height">🌊 {waveHeight}</span>
        </div>

        <div className="included-items">
          <h4>Included:</h4>
          <ul>
            {included.slice(0, 3).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            {included.length > 3 && <li>+ {included.length - 3} more...</li>}
          </ul>
        </div>

        <div className="card-footer">
          <div className="price">
            <span className="price-amount">${pricePerDay}</span>
            <span className="price-period">/ day</span>
          </div>
          <button 
            className="book-now-btn"
            onClick={() => onBookNow(spot)}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default SurfSpotCard