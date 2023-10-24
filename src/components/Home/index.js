import {Link} from 'react-router-dom'
import RegisterContext from '../../context/RegisterContext'
import './index.css'

const Home = () => (
  <RegisterContext.Consumer>
    {value => {
      const {userName, isRegistered, topic} = value
      return (
        <div>
          <div className="header-container">
            <Link to="/" className="image-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
                className="logo-image"
              />
            </Link>
          </div>
          <div className="home-container">
            {!isRegistered ? (
              <h1 className="home-heading">Welcome to Meetup</h1>
            ) : (
              <h1 className="home-heading">Hello {userName}</h1>
            )}
            {!isRegistered ? (
              <p className="home-para">Please register for the topic</p>
            ) : (
              <p className="home-para">Welcome to {topic}</p>
            )}
            {!isRegistered && (
              <Link to="/register">
                <button className="home-button" type="button">
                  Register
                </button>
              </Link>
            )}
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
              className="home-image"
            />
          </div>
        </div>
      )
    }}
  </RegisterContext.Consumer>
)

export default Home
