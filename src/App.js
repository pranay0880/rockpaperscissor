import {Component} from 'react'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {RiCloseLine} from 'react-icons/ri'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    working: false,
    selectedId: '',
    randomId: '',
    status: '',
  }

  playAgain = () => {
    this.setState({
      working: false,
      selectedId: '',
      randomId: '',
      status: '',
    })
  }

  rockButton = () => {
    const {score} = this.state
    const randomDice = Math.floor(Math.random() * 3)
    const randomList = choicesList[randomDice]
    const randomId = randomList.id
    let updatedScore
    let result
    if (randomId === 'ROCK') {
      result = 'IT IS DRAW'
      updatedScore = score
    }
    if (randomId === 'PAPER') {
      result = 'YOU LOSE'
      updatedScore = score - 1
    }
    if (randomId === 'SCISSORS') {
      result = 'YOU WON'
      updatedScore = score + 1
    }
    this.setState({
      working: true,
      selectedId: 'ROCK',
      randomId,
      status: result,
      score: updatedScore,
    })
  }

  scissorButton = () => {
    const {score} = this.state
    const randomDice = Math.floor(Math.random() * 3)
    const randomList = choicesList[randomDice]
    const randomId = randomList.id
    let updatedScore
    let result
    if (randomId === 'ROCK') {
      result = 'YOU LOSE'
      updatedScore = score - 1
    }
    if (randomId === 'PAPER') {
      result = 'YOU WON'
      updatedScore = score + 1
    }
    if (randomId === 'SCISSORS') {
      result = 'IT IS DRAW'
      updatedScore = score
    }
    this.setState({
      working: true,
      selectedId: 'SCISSORS',
      randomId,
      status: result,
      score: updatedScore,
    })
  }

  paperButton = () => {
    const {score} = this.state
    const randomDice = Math.floor(Math.random() * 3)
    const randomList = choicesList[randomDice]
    const randomId = randomList.id
    let updatedScore
    let result
    if (randomId === 'ROCK') {
      result = 'YOU WON'
      updatedScore = score + 1
    }
    if (randomId === 'PAPER') {
      result = 'IT IS DRAW'
      updatedScore = score
    }
    if (randomId === 'SCISSORS') {
      result = 'YOU LOSE'
      updatedScore = score - 1
    }
    this.setState({
      working: true,
      selectedId: 'PAPER',
      randomId,
      status: result,
      score: updatedScore,
    })
  }

  selectList = () => (
    <div className="buttons">
      <button
        data-testid="rockButton"
        key="ROCK"
        type="button"
        className="button1"
        onClick={this.rockButton}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
          alt="ROCK"
          className="image1"
        />
      </button>
      <button
        data-testid="scissorsButton"
        key="SCISSORS"
        type="button"
        className="button1"
        onClick={this.scissorButton}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
          alt="SCISSORS"
          className="image1"
        />
      </button>
      <button
        data-testid="paperButton"
        key="PAPER"
        type="button"
        className="button1"
        onClick={this.paperButton}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
          alt="PAPER"
          className="image1"
        />
      </button>
    </div>
  )

  winOrLose = () => {
    const {selectedId, randomId, status} = this.state
    const selectedList = choicesList.filter(
      eachList => eachList.id === selectedId,
    )
    const selectedUrl = selectedList[0].imageUrl
    console.log(selectedUrl)
    const randomList2 = choicesList.filter(eachList => eachList.id === randomId)
    const randomUrl = randomList2[0].imageUrl
    console.log(randomUrl)
    return (
      <div className="resultsContainer">
        <div className="differenceContainer">
          <img src={selectedUrl} alt="your choice" className="image1" />
          <img src={randomUrl} alt="opponent choice" className="image1" />
        </div>
        <p>{status}</p>
        <button type="button" className="playAgain" onClick={this.playAgain}>
          Play Again
        </button>
      </div>
    )
  }

  render() {
    const {score, working, status, randomId, selectedId} = this.state
    console.log(score, working, status, randomId, selectedId)
    return (
      <div className="container">
        <h1>Rock Paper Scissors</h1>
        <div className="marksContainer">
          <ul className="unOrder">
            <li>ROCK</li>
            <li>PAPER</li>
            <li>SCISSORS</li>
          </ul>
          <div className="scoreContainer">
            <p>Score</p>
            <p className="scoreFont">{score}</p>
          </div>
        </div>
        {working ? this.winOrLose() : this.selectList()}
        <div className="rulesContainer">
          <Popup
            modal
            trigger={
              <button type="button" className="rulesButton">
                RULES
              </button>
            }
          >
            {close => (
              <div className="popupContainer">
                <RiCloseLine className="closeIcon" onClick={() => close()} />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                  className="rulesImage"
                />
              </div>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}

export default App
