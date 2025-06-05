import './AboutTinkso.css'

function AboutTinkso() {
  return (
    <div className="about-tinkso">
      <div className="container">
        <div className="content-wrapper">
          <div className="header-section">
            <h1>Built with Excellence</h1>
            <p className="subtitle">This Costa Rica Surf App was proudly developed by Tinkso</p>
          </div>

          <div className="tinkso-info">
            <div className="logo-section">
              <h2>About Tinkso</h2>
              <p className="company-tagline">
                "We are a next generation digital product studio obsessed with helping your business grow."
              </p>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <h3>🚀 Custom Business Software</h3>
                <p>Designing and building tailored software solutions that perfectly fit your business needs.</p>
              </div>

              <div className="service-card">
                <h3>⚡ Lightning Fast Development</h3>
                <p>Delivering solutions faster than traditional SaaS platforms using cutting-edge no-code technologies.</p>
              </div>

              <div className="service-card">
                <h3>📈 100% User Adoption</h3>
                <p>Creating intuitive solutions that users actually love to use, ensuring maximum business impact.</p>
              </div>

              <div className="service-card">
                <h3>🎨 Modern Web Technologies</h3>
                <p>Leveraging the latest web technologies to create beautiful, responsive, and performant applications.</p>
              </div>
            </div>

            <div className="project-info">
              <h3>About This Project</h3>
              <p>
                This Costa Rica Surf App showcases Tinkso's expertise in creating modern, 
                user-friendly web applications. Built with React and deployed on Cloudflare Pages, 
                it demonstrates our commitment to using cutting-edge technologies to deliver 
                exceptional digital experiences.
              </p>
              <p>
                The app features responsive design, intuitive booking functionality, and smooth 
                user interactions - all hallmarks of Tinkso's approach to digital product development.
              </p>
            </div>

            <div className="cta-section">
              <h3>Ready to Build Something Amazing?</h3>
              <p>Let Tinkso help bring your digital vision to life with custom software solutions.</p>
              <a 
                href="https://tinkso.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-button"
              >
                Visit Tinkso.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutTinkso