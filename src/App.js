import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Register from './components/Register'
import Home from './components/Home'
import RegisterContext from './context/RegisterContext'
import NotFound from './components/NotFound'
import './App.css'

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

class App extends Component {
  state = {userName: '', topic: topicsList[0].displayText, isRegistered: false}

  getName = inputName => {
    this.setState({userName: inputName})
  }

  changeTopic = topicId => {
    const filterTopic = topicsList.find(item => item.id === topicId)
    this.setState({topic: filterTopic.displayText})
  }

  toggleRegister = () => {
    this.setState(prevState => ({isRegistered: !prevState.isRegistered}))
  }

  render() {
    const {userName, isRegistered, topic} = this.state
    console.log(userName, topic, isRegistered)
    return (
      <RegisterContext.Provider
        value={{
          userName,
          topic,
          isRegistered,
          changeTopic: this.changeTopic,
          getName: this.getName,
          toggleRegister: this.toggleRegister,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
