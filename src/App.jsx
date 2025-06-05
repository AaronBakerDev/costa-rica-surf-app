import { useState } from 'react'
import Header from './components/Header'
import SurfSpotGrid from './components/SurfSpotGrid'
import BookingModal from './components/BookingModal'
import { surfSpots } from './data/surfSpots'
import './App.css'

function App() {
  const [selectedSpot, setSelectedSpot] = useState(null)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const handleBookNow = (spot) => {
    setSelectedSpot(spot)
    setIsBookingModalOpen(true)
  }

  const closeModal = () => {
    setIsBookingModalOpen(false)
    setSelectedSpot(null)
  }

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="hero-section">
          <h1>Discover Epic Surf Adventures in Costa Rica</h1>
          <p>Book unforgettable surf trips at the best spots along Costa Rica's coastline</p>
        </div>
        <SurfSpotGrid 
          spots={surfSpots} 
          onBookNow={handleBookNow}
        />
      </main>
      {isBookingModalOpen && (
        <BookingModal 
          spot={selectedSpot}
          onClose={closeModal}
        />
      )}
    </div>
  )
}

export default App
