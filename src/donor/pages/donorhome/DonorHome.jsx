import React from 'react'
import './donorhome.scss'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../../../Landing/components/footer/Footer'
import DonorSlier from '../../components/donorslier/DonorSlier'

const DonorHome = () => {
  return (
    <div className="home-page">
      <Navbar />
      <DonorSlier/>
      <div className="causes">
        <h2>Our Causes</h2>
        <div className="cards">
          <div className="card">
            <div className="card-image">
              <img src="/images/needy kids.jpg" alt="Cause 1" />
              <div className="card-buttons">
                <button className="btn-donate">Donate Now</button>
                <button className="btn-read-more">Read More</button>
              </div>
            </div>
            <div className="card-content">
              <h3>Bring water to the children</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum.</p>
              <div className="progress">
                <div className="progress-bar" style={{ width: '83%' }}></div>
                <div className="progress-info">
                  <span>Raised: 16.78M</span>
                  <span>Goal: 20M</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src="/images/needy xul kid.jpg" alt="Cause 2" />
              <div className="card-buttons">
                <button className="btn-donate">Donate Now</button>
                <button className="btn-read-more">Read More</button>
              </div>
            </div>
            <div className="card-content">
              <h3>Education for all</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum.</p>
              <div className="progress">
                <div className="progress-bar" style={{ width: '70%' }}></div>
                <div className="progress-info">
                  <span>Raised: 32.1M</span>
                  <span>Goal: 75M</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src="/images/needy.jpg" alt="Cause 3" />
              <div className="card-buttons">
                <button className="btn-donate">Donate Now</button>
                <button className="btn-read-more">Read More</button>
              </div>
            </div>
            <div className="card-content">
              <h3>Save the forgotten</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum.</p>
              <div className="progress">
                <div className="progress-bar" style={{ width: '83%' }}></div>
                <div className="progress-info">
                  <span>Raised: 56.8M</span>
                  <span>Goal: 70M</span>
                </div>
              </div>
            </div>
          </div>
        <div className="view-all">
          <span><Link to="/allcampaigns">View All Campaigns</Link></span>
        </div>
        </div>
      </div>
      <div className="events-section">
        <h2>Upcoming Events</h2>
        <h3>Be ready for our upcoming charity events</h3>
        <div className="events-container">
          <div className="event-card">
            <img src="/images/SE1.jpg" alt="Event 1" />
            <div className="event-details">
              <div className="event-info">
                <span className="icon">🗓️</span> 01-Jan-25
              </div>
              <div className="event-info">
                <span className="icon">⏰</span> 8:00 - 10:00
              </div>
              <div className="event-info">
                <span className="icon">📍</span> Pallisa
              </div>
              <h3>Save the Environment</h3>
              <p>Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor</p>
              <button className="btn-join">Join Now</button>
            </div>
          </div>
          <div className="event-card">
            <img src="/images/SE2.jpg" alt="Event 2" />
            <div className="event-details">
              <div className="event-info">
                <span className="icon">🗓️</span> 01-Jan-27
              </div>
              <div className="event-info">
                <span className="icon">⏰</span> 8:00 - 10:00
              </div>
              <div className="event-info">
                <span className="icon">📍</span> Yumbe
              </div>
              <h3>Help the Needy</h3>
              <p>Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor</p>
              <button className="btn-join">Join Now</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default DonorHome