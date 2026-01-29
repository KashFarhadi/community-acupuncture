import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Phone,
  Leaf,
  Clock,
  Shield,
  Heart
} from 'lucide-react'
import '../App.css'
import './ServicePage.css'

function ServicePage({
  title,
  subtitle,
  heroImage,
  introduction,
  benefits,
  whatToExpect,
  conditions,
  faq,
  ctaText
}) {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const goToContact = () => {
    navigate('/')
    setTimeout(() => {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <div className="service-page">
      {/* Header */}
      <header className="sp-header">
        <div className="container sp-header-content">
          <Link to="/" className="sp-logo">
            <Leaf className="sp-logo-icon" />
            <span>Flora Arzanipour</span>
          </Link>
          <button onClick={goToContact} className="btn btn-primary">
            Book Appointment
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="sp-hero">
        <div className="sp-hero-bg">
          <img src={heroImage} alt={title} />
          <div className="sp-hero-overlay"></div>
        </div>
        <div className="container sp-hero-content">
          <Link to="/" className="sp-back-link">
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>
          <h1>{title}</h1>
          <p className="sp-hero-subtitle">{subtitle}</p>
          <button onClick={goToContact} className="btn btn-primary btn-lg">
            Schedule Your Session
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Introduction */}
      <section className="sp-intro section">
        <div className="container">
          <div className="sp-intro-grid">
            <div className="sp-intro-content">
              <span className="section-label">About This Treatment</span>
              <h2>What is {title}?</h2>
              {introduction.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="sp-intro-highlights">
              <div className="sp-highlight">
                <Shield className="sp-highlight-icon" />
                <div>
                  <h4>Safe & Natural</h4>
                  <p>Non-invasive treatment with minimal side effects</p>
                </div>
              </div>
              <div className="sp-highlight">
                <Heart className="sp-highlight-icon" />
                <div>
                  <h4>Holistic Approach</h4>
                  <p>Treats the root cause, not just symptoms</p>
                </div>
              </div>
              <div className="sp-highlight">
                <Clock className="sp-highlight-icon" />
                <div>
                  <h4>Lasting Results</h4>
                  <p>Long-term wellness benefits with regular treatment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="sp-benefits section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why Choose This Treatment</span>
            <h2>Benefits of {title}</h2>
          </div>
          <div className="sp-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="sp-benefit-card">
                <div className="sp-benefit-number">{index + 1}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="sp-expect section">
        <div className="container">
          <div className="sp-expect-content">
            <span className="section-label">Your Experience</span>
            <h2>What to Expect During Your {title} Session</h2>
            <div className="sp-expect-steps">
              {whatToExpect.map((step, index) => (
                <div key={index} className="sp-expect-step">
                  <div className="sp-step-marker">
                    <span>{index + 1}</span>
                  </div>
                  <div className="sp-step-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="sp-conditions section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Conditions We Address</span>
            <h2>{title} Can Help With</h2>
          </div>
          <div className="sp-conditions-grid">
            {conditions.map((condition, index) => (
              <div key={index} className="sp-condition-item">
                <CheckCircle className="sp-condition-icon" />
                <span>{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="sp-faq section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Common Questions</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="sp-faq-list">
            {faq.map((item, index) => (
              <div key={index} className="sp-faq-item">
                <h4>{item.question}</h4>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sp-cta section">
        <div className="container">
          <div className="sp-cta-content">
            <h2>{ctaText || `Ready to Experience ${title}?`}</h2>
            <p>
              Take the first step toward better health and wellness.
              Schedule your consultation today and discover how {title.toLowerCase()} can help you.
            </p>
            <div className="sp-cta-buttons">
              <button onClick={goToContact} className="btn btn-primary btn-lg">
                Book Your Appointment
                <ArrowRight size={20} />
              </button>
              <a href="tel:3125550123" className="btn btn-outline btn-lg">
                <Phone size={20} />
                Call (312) 555-0123
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="sp-footer">
        <div className="container">
          <div className="sp-footer-content">
            <Link to="/" className="sp-logo">
              <Leaf className="sp-logo-icon" />
              <div className="sp-logo-text">
                <span className="sp-logo-name">Flora Arzanipour</span>
                <span className="sp-logo-title">Acupuncture & Herbal Medicine</span>
              </div>
            </Link>
            <p>&copy; {new Date().getFullYear()} Flora Arzanipour Acupuncture. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ServicePage
