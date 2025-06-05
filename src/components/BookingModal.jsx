import React, { useState } from 'react'

const BookingModal = ({ spot, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    participants: 1,
    experience: 'beginner',
    specialRequests: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Booking request submitted for ${spot.name}! We'll contact you within 24 hours to confirm your reservation.`)
    onClose()
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const totalPrice = spot.pricePerDay * formData.participants

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Book Your Surf Trip</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="booking-summary">
          <div className="spot-info">
            <img src={spot.image} alt={spot.name} className="spot-image" />
            <div className="spot-details">
              <h3>{spot.name}</h3>
              <p>{spot.location}</p>
              <p className="difficulty">Difficulty: {spot.difficulty}</p>
              <p className="wave-height">Wave Height: {spot.waveHeight}</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Preferred Date *</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="participants">Participants</label>
              <select
                id="participants"
                name="participants"
                value={formData.participants}
                onChange={handleChange}
              >
                {[1,2,3,4,5,6].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="experience">Surfing Experience</label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            >
              <option value="beginner">Beginner (0-1 years)</option>
              <option value="intermediate">Intermediate (1-3 years)</option>
              <option value="advanced">Advanced (3+ years)</option>
              <option value="expert">Expert/Professional</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="specialRequests">Special Requests or Dietary Restrictions</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows="3"
              placeholder="Any special requirements, dietary restrictions, or requests..."
            />
          </div>

          <div className="price-summary">
            <div className="price-breakdown">
              <div className="price-line">
                <span>${spot.pricePerDay} × {formData.participants} participant{formData.participants > 1 ? 's' : ''}</span>
                <span>${totalPrice}</span>
              </div>
              <div className="price-total">
                <strong>Total: ${totalPrice}</strong>
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-btn">
              Request Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BookingModal