import { useState, useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  Star,
  Leaf,
  Heart,
  Shield,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Quote
} from 'lucide-react'
import './App.css'
import floraHeadshot from '/images/flora-headshot.png'

// Import service pages
import AcupuncturePage from './pages/AcupuncturePage'
import CuppingPage from './pages/CuppingPage'
import HerbalMedicinePage from './pages/HerbalMedicinePage'
import MoxibustionPage from './pages/MoxibustionPage'
import GuaShaPage from './pages/GuaShaPage'
import SAATPage from './pages/SAATPage'

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ['home', 'about', 'services', 'benefits', 'first-visit', 'testimonials', 'contact']
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'first-visit', label: 'First Visit' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ]

  const services = [
    {
      title: 'Acupuncture',
      description: 'Traditional Chinese acupuncture using fine, sterile needles to stimulate specific points on the body, promoting natural healing and restoring balance.',
      icon: <Sparkles className="service-icon" />,
      link: '/services/acupuncture'
    },
    {
      title: 'Cupping Therapy',
      description: 'Ancient therapy using suction cups to improve circulation, relieve muscle tension, and promote cellular repair and regeneration.',
      icon: <Heart className="service-icon" />,
      link: '/services/cupping'
    },
    {
      title: 'Herbal Medicine',
      description: 'Customized herbal formulas tailored to your unique constitution and health concerns, supporting your body\'s innate healing abilities.',
      icon: <Leaf className="service-icon" />,
      link: '/services/herbal-medicine'
    },
    {
      title: 'Moxibustion',
      description: 'Warming therapy using dried mugwort to stimulate acupuncture points, enhancing circulation and strengthening the immune system.',
      icon: <Shield className="service-icon" />,
      link: '/services/moxibustion'
    },
    {
      title: 'Gua Sha',
      description: 'Traditional scraping technique that promotes blood flow, reduces inflammation, and releases muscle tension for deep healing.',
      icon: <Sparkles className="service-icon" />,
      link: '/services/gua-sha'
    },
    {
      title: 'SAAT Therapy',
      description: 'Soliman Auricular Allergy Treatment - a specialized acupuncture technique for addressing allergies and sensitivities.',
      icon: <CheckCircle className="service-icon" />,
      link: '/services/saat'
    }
  ]

  const benefits = [
    'Chronic Pain Relief',
    'Stress & Anxiety',
    'Digestive Issues',
    'Insomnia & Sleep',
    'Allergies & Immunity',
    'Fertility Support',
    'Headaches & Migraines',
    'Women\'s Health',
    'Facial Rejuvenation',
    'Smoking Cessation',
    'Sports Injuries',
    'Emotional Balance'
  ]

  const testimonials = [
    {
      name: 'Sarah M.',
      text: 'After years of chronic back pain, I finally found relief through acupuncture. Dr. Arzanipour\'s gentle approach and expertise have been life-changing.',
      rating: 5
    },
    {
      name: 'Michael T.',
      text: 'I was skeptical at first, but the results speak for themselves. My anxiety has decreased significantly and I sleep better than I have in years.',
      rating: 5
    },
    {
      name: 'Jennifer L.',
      text: 'The whole experience is so calming and professional. I always leave feeling balanced and renewed. Highly recommend!',
      rating: 5
    }
  ]

  return (
    <div className="app">
      {/* Sticky Header */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-content">
          <div className="logo" onClick={() => scrollToSection('home')}>
            <Leaf className="logo-icon" />
            <div className="logo-text">
              <span className="logo-name">Flora Arzanipour</span>
              <span className="logo-title">L.Ac., DAOM</span>
            </div>
          </div>

          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            {navLinks.map(link => (
              <button
                key={link.id}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </button>
            ))}
            <button className="btn btn-primary nav-cta" onClick={() => scrollToSection('contact')}>
              Book Appointment
            </button>
          </nav>

          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>New Patient Special - 15% Off First Visit</span>
          </div>
          <h1 className="hero-title">
            Restore Balance.<br />
            <span className="highlight">Renew Your Wellness.</span>
          </h1>
          <p className="hero-subtitle">
            Experience the healing power of Traditional Chinese Medicine in a
            modern, welcoming environment. Personalized acupuncture care for
            your unique journey to optimal health.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary btn-lg" onClick={() => scrollToSection('contact')}>
              Schedule Your Appointment
              <ArrowRight size={20} />
            </button>
            <button className="btn btn-outline btn-lg" onClick={() => scrollToSection('first-visit')}>
              What to Expect
            </button>
          </div>
          <div className="hero-trust">
            <div className="trust-item">
              <CheckCircle size={18} />
              <span>Licensed & Certified</span>
            </div>
            <div className="trust-item">
              <CheckCircle size={18} />
              <span>15+ Years Experience</span>
            </div>
            <div className="trust-item">
              <CheckCircle size={18} />
              <span>Holistic Approach</span>
            </div>
          </div>
        </div>
        <div className="hero-scroll" onClick={() => scrollToSection('about')}>
          <span>Discover More</span>
          <ChevronDown className="bounce" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <div className="image-frame circular">
                <img
                  src={floraHeadshot}
                  alt="Dr. Flora Arzanipour - Licensed Acupuncturist"
                  className="headshot-photo circular"
                />
              </div>
              <div className="about-badge">
                <span className="badge-number">15+</span>
                <span className="badge-text">Years of Healing</span>
              </div>
            </div>
            <div className="about-content">
              <span className="section-label">About Your Practitioner</span>
              <h2 className="section-title">Dr. Flora Arzanipour, L.Ac., DAOM</h2>
              <p className="about-intro">
                Doctor of Acupuncture and Traditional Chinese Medicine
              </p>
              <p>
                Dr. Flora Arzanipour is a nationally certified and state-licensed acupuncturist
                with over 15 years of experience helping patients achieve optimal health through
                the time-honored practices of Traditional Chinese Medicine.
              </p>
              <p>
                She received her Doctor of Acupuncture and Oriental Medicine (DAOM) degree from
                Five Branches University of Traditional Chinese Medicine, and her Master's degree
                from the Midwest College of Oriental Medicine in Chicago. Her extensive training
                combines classical techniques with modern approaches to provide comprehensive,
                evidence-based care.
              </p>
              <p>
                Dr. Arzanipour is also a certified SAAT (Soliman Auricular Allergy Treatment)
                practitioner, specializing in treating allergies and sensitivities through
                auricular acupuncture.
              </p>
              <div className="about-specialties">
                <h4>Areas of Specialty</h4>
                <div className="specialty-tags">
                  <span className="tag">Pain Management</span>
                  <span className="tag">Fertility Support</span>
                  <span className="tag">Cosmetic Acupuncture</span>
                  <span className="tag">Facial Rejuvenation</span>
                  <span className="tag">Allergy Treatment</span>
                  <span className="tag">Smoking Cessation</span>
                </div>
              </div>
              <div className="credentials">
                <div className="credential">
                  <Shield size={20} />
                  <span>NCCAOM Certified</span>
                </div>
                <div className="credential">
                  <CheckCircle size={20} />
                  <span>State Licensed</span>
                </div>
                <div className="credential">
                  <Sparkles size={20} />
                  <span>SAAT Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Healing Modalities</span>
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive Traditional Chinese Medicine therapies tailored to your unique needs
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="service-card">
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-link">
                  Learn More <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
          <div className="services-cta">
            <button className="btn btn-primary btn-lg" onClick={() => scrollToSection('contact')}>
              Schedule a Consultation
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="benefits section">
        <div className="container">
          <div className="benefits-content">
            <div className="benefits-text">
              <span className="section-label">Conditions We Treat</span>
              <h2 className="section-title">How Acupuncture Can Help You</h2>
              <p>
                Acupuncture and Traditional Chinese Medicine offer natural, effective solutions
                for a wide range of health concerns. Our holistic approach addresses the root
                cause of your symptoms, not just the surface issues.
              </p>
              <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                Discuss Your Concerns
              </button>
            </div>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <CheckCircle className="benefit-icon" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* First Visit Section */}
      <section id="first-visit" className="first-visit section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">New Patients</span>
            <h2 className="section-title">What to Expect on Your First Visit</h2>
            <p className="section-subtitle">
              Your journey to wellness begins with a comprehensive, personalized consultation
            </p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Intake & Discussion</h3>
              <p>
                We'll discuss your health history, current concerns, and wellness goals
                in detail. This helps us understand your unique constitution and needs.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>TCM Assessment</h3>
              <p>
                Using traditional diagnostic methods including pulse and tongue diagnosis,
                we'll develop a complete picture of your health from a Chinese Medicine perspective.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Treatment Plan</h3>
              <p>
                Together, we'll create a personalized treatment plan that may include
                acupuncture, herbal medicine, and lifestyle recommendations.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Your First Treatment</h3>
              <p>
                Relax in our tranquil treatment space as you experience your first
                acupuncture session. Most patients feel deeply relaxed and rejuvenated.
              </p>
            </div>
          </div>
          <div className="first-visit-info">
            <div className="info-card">
              <Clock size={24} />
              <div>
                <h4>Session Duration</h4>
                <p>Initial visit: 90 minutes<br />Follow-up visits: 60 minutes</p>
              </div>
            </div>
            <div className="info-card">
              <Heart size={24} />
              <div>
                <h4>Comfort & Care</h4>
                <p>Wear comfortable, loose clothing.<br />We use only sterile, single-use needles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Patient Stories</span>
            <h2 className="section-title">What Our Patients Say</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <Quote className="quote-icon" />
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="star filled" />
                  ))}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <p className="testimonial-name">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="section-label">Get in Touch</span>
              <h2 className="section-title">Ready to Begin Your Healing Journey?</h2>
              <p>
                Take the first step toward better health. Contact us today to schedule
                your appointment or learn more about how acupuncture can help you.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <MapPin size={24} />
                  <div>
                    <h4>Location</h4>
                    <p>Chicago, IL</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Phone size={24} />
                  <div>
                    <h4>Phone</h4>
                    <p>(312) 555-0123</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Mail size={24} />
                  <div>
                    <h4>Email</h4>
                    <p>info@floraacupuncture.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Clock size={24} />
                  <div>
                    <h4>Hours</h4>
                    <p>Mon-Fri: 9am - 6pm<br />Sat: 10am - 4pm</p>
                  </div>
                </div>
              </div>

              <div className="urgent-badge">
                <Sparkles size={20} />
                <span>Limited Appointments Available This Week</span>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <h3>Request an Appointment</h3>
                <div className="form-group">
                  <input type="text" placeholder="Your Name *" required />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <input type="email" placeholder="Email *" required />
                  </div>
                  <div className="form-group">
                    <input type="tel" placeholder="Phone *" required />
                  </div>
                </div>
                <div className="form-group">
                  <select defaultValue="">
                    <option value="" disabled>Reason for Visit</option>
                    <option value="pain">Pain Management</option>
                    <option value="stress">Stress & Anxiety</option>
                    <option value="fertility">Fertility Support</option>
                    <option value="digestive">Digestive Health</option>
                    <option value="cosmetic">Facial Rejuvenation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="Tell us about your health concerns..." rows="4"></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-full">
                  Request Appointment
                  <ArrowRight size={20} />
                </button>
                <p className="form-note">
                  We'll respond within 24 hours to confirm your appointment.
                </p>
              </form>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="map-container">
            <div className="map-placeholder">
              <MapPin size={48} />
              <p>Interactive Map Coming Soon</p>
              <span>Chicago, IL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <Leaf className="logo-icon" />
                <div className="logo-text">
                  <span className="logo-name">Flora Arzanipour</span>
                  <span className="logo-title">Acupuncture & Herbal Medicine</span>
                </div>
              </div>
              <p>
                Bringing balance and wellness through the time-honored practices
                of Traditional Chinese Medicine.
              </p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              {navLinks.map(link => (
                <button key={link.id} onClick={() => scrollToSection(link.id)}>
                  {link.label}
                </button>
              ))}
            </div>
            <div className="footer-contact">
              <h4>Contact Us</h4>
              <p><MapPin size={16} /> Chicago, IL</p>
              <p><Phone size={16} /> (312) 555-0123</p>
              <p><Mail size={16} /> info@floraacupuncture.com</p>
            </div>
            <div className="footer-cta">
              <h4>Start Your Journey</h4>
              <p>Ready to experience the benefits of acupuncture?</p>
              <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                Book Now
              </button>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Flora Arzanipour Acupuncture. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services/acupuncture" element={<AcupuncturePage />} />
      <Route path="/services/cupping" element={<CuppingPage />} />
      <Route path="/services/herbal-medicine" element={<HerbalMedicinePage />} />
      <Route path="/services/moxibustion" element={<MoxibustionPage />} />
      <Route path="/services/gua-sha" element={<GuaShaPage />} />
      <Route path="/services/saat" element={<SAATPage />} />
    </Routes>
  )
}

export default App
