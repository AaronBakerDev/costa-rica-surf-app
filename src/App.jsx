import { useState } from 'react'
import Header from './components/Header'
import SurfSpotGrid from './components/SurfSpotGrid'
import BookingModal from './components/BookingModal'
import AboutTinkso from './components/AboutTinkso'
import FriendGreeter from './components/FriendGreeter'
import { surfSpots } from './data/surfSpots'
import './App.css'

function App() {
  const [selectedSpot, setSelectedSpot] = useState(null)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')

  const handleBookNow = (spot) => {
    setSelectedSpot(spot)
    setIsBookingModalOpen(true)
  }

  const closeModal = () => {
    setIsBookingModalOpen(false)
    setSelectedSpot(null)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutTinkso />
      case 'home':
      default:
        return (
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
        )
    }
  }

  return (
    <div className="app">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      {isBookingModalOpen && (
        <BookingModal 
          spot={selectedSpot}
          onClose={closeModal}
        />
      )}
      <FriendGreeter />
    </div>
  )
}

export default App
