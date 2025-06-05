import React, { useState, useEffect } from 'react'

const FriendGreeter = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [greeting, setGreeting] = useState('')
  const [showGreeting, setShowGreeting] = useState(false)

  const friends = [
    {
      name: "Matt Bartek",
      greetings: [
        "🤙 Hey Matt Bartek! Ready to catch some gnarly waves?",
        "🏄‍♂️ What's up Matt Bartek! The surf's calling your name!",
        "🌊 Yo Matt Bartek! Time to shred some Costa Rican waves!",
        "🤘 Matt Bartek in the house! Let's go surfing!",
        "🏖️ Hey there Matt Bartek! The ocean awaits!"
      ],
      emoji: "🤙",
      color: "linear-gradient(135deg, #ff6b6b, #ee5a24)"
    },
    {
      name: "Erix",
      greetings: [
        "🤝 What's good Erix! Ready for an epic surf adventure?",
        "🌴 Hey Erix! Costa Rica's waves are waiting for you!",
        "⚡ Erix! Time to ride some legendary swells!",
        "🔥 Sup Erix! Let's conquer these Costa Rican breaks!",
        "🎯 Erix! Your surf adventure starts now!"
      ],
      emoji: "⚡",
      color: "linear-gradient(135deg, #4ecdc4, #44a08d)"
    }
  ]

  const handleGreet = () => {
    if (isAnimating) return

    setIsAnimating(true)
    
    // Random friend selection
    const randomFriend = friends[Math.floor(Math.random() * friends.length)]
    const randomGreeting = randomFriend.greetings[Math.floor(Math.random() * randomFriend.greetings.length)]
    
    setGreeting(randomGreeting)
    setShowGreeting(true)

    // Reset animation after showing greeting
    setTimeout(() => {
      setIsAnimating(false)
      setTimeout(() => setShowGreeting(false), 3000)
    }, 500)
  }

  return (
    <>
      {/* Floating Action Button */}
      <div 
        className={`friend-greeter-btn ${isAnimating ? 'animating' : ''}`}
        onClick={handleGreet}
      >
        <div className="btn-content">
          <span className="wave-emoji">🌊</span>
          <span className="btn-text">Say Hi!</span>
        </div>
        <div className="ripple-effect"></div>
      </div>

      {/* Greeting Toast */}
      {showGreeting && (
        <div className="greeting-toast">
          <div className="greeting-content">
            <div className="greeting-text">{greeting}</div>
            <button 
              className="close-greeting" 
              onClick={() => setShowGreeting(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .friend-greeter-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1000;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          animation: float 3s ease-in-out infinite;
        }

        .friend-greeter-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6);
          background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
        }

        .friend-greeter-btn.animating {
          animation: bounce 0.6s ease-in-out;
        }

        .btn-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          text-align: center;
          transition: all 0.3s ease;
        }

        .wave-emoji {
          font-size: 1.5rem;
          margin-bottom: 2px;
          animation: wave 2s ease-in-out infinite;
        }

        .btn-text {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          opacity: 0.9;
        }

        .ripple-effect {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .friend-greeter-btn:active .ripple-effect {
          animation: ripple 0.6s ease-out;
        }

        .greeting-toast {
          position: fixed;
          top: 2rem;
          right: 2rem;
          max-width: 400px;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.2);
          z-index: 1001;
          animation: slideInRight 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .greeting-content {
          padding: 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .greeting-text {
          flex: 1;
          font-size: 1.1rem;
          font-weight: 600;
          color: #1f2937;
          line-height: 1.4;
        }

        .close-greeting {
          background: none;
          border: none;
          font-size: 1.5rem;
          color: #6b7280;
          cursor: pointer;
          padding: 0;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.2s ease;
        }

        .close-greeting:hover {
          background: #f3f4f6;
          color: #374151;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes wave {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-10deg);
          }
          75% {
            transform: rotate(10deg);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        @keyframes ripple {
          0% {
            width: 0;
            height: 0;
            opacity: 1;
          }
          100% {
            width: 140px;
            height: 140px;
            opacity: 0;
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .friend-greeter-btn {
            width: 60px;
            height: 60px;
            bottom: 1.5rem;
            right: 1.5rem;
          }

          .wave-emoji {
            font-size: 1.3rem;
          }

          .btn-text {
            font-size: 0.6rem;
          }

          .greeting-toast {
            top: 1rem;
            right: 1rem;
            left: 1rem;
            max-width: none;
          }

          .greeting-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  )
}

export default FriendGreeter