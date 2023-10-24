import {Component} from 'react'
import {Link} from 'react-router-dom'
import RegisterContext from '../../context/RegisterContext'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {errorShow: false}

  renderRegisterView = () => {
    const {errorShow} = this.state

    return (
      <RegisterContext.Consumer>
        {value => {
          const {
            userName,
            getName,
            topic,
            changeTopic,
            isRegistered,
            toggleRegister,
          } = value
          return (
            <div className="register-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
                className="register-image"
              />
              <form
                className="form"
                onSubmit={e => {
                  e.preventDefault()
                  if (userName === '') {
                    this.setState({errorShow: true})
                  } else {
                    toggleRegister()
                    const {history} = this.props

                    history.replace('/')
                  }
                }}
              >
                <h1 className="form-heading">Let us join</h1>
                <div className="label-input-container">
                  <label htmlFor="input" className="label">
                    NAME
                  </label>
                  <br />
                  <input
                    className="input"
                    id="input"
                    type="text"
                    onChange={e => getName(e.target.value)}
                    value={userName}
                  />
                </div>
                <div className="label-input-container">
                  <label className="label" htmlFor="select">
                    TOPICS
                  </label>
                  <br />
                  <select
                    className="select"
                    id="select"
                    onChange={e => changeTopic(e.target.value)}
                  >
                    {topicsList.map(item => (
                      <option key={item.id} value={item.id}>
                        {item.displayText}
                      </option>
                    ))}
                  </select>
                </div>
                <button className="register-button" type="submit">
                  Register Now
                </button>
                {errorShow && <p className="error">Please enter your name</p>}
              </form>
            </div>
          )
        }}
      </RegisterContext.Consumer>
    )
  }

  render() {
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
        {this.renderRegisterView()}
      </div>
    )
  }
}

export default Register
