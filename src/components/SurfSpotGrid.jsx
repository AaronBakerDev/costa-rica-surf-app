import React from 'react'
import SurfSpotCard from './SurfSpotCard'

const SurfSpotGrid = ({ spots, onBookNow }) => {
  return (
    <section className="surf-spots-section" id="spots">
      <div className="container">
        <h2>Popular Surf Destinations</h2>
        <div className="spots-grid">
          {spots.map(spot => (
            <SurfSpotCard 
              key={spot.id} 
              spot={spot} 
              onBookNow={onBookNow}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SurfSpotGrid