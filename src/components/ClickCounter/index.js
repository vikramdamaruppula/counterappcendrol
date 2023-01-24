import Counter2 from "../Counter2"

import {Component} from 'react'
import "./index.css"

class ClickCounter extends Component {
  state = {
    count: 0,
    isBlue: true
  }

  onIncrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 10}))
  }

  handleChangeColor=()=>{
    this.setState(prevState =>({
      isBlue:!prevState.isBlue
    }))
  }

  render() {
    const {count,isBlue} = this.state
    const changeColor = isBlue ? "black" : "blue"

    return (
      <div className="container">
        <div className="counter-container">
        <div className="button-container">
        <Counter2 increase={count} />
          <button
            type="button"
            className="button"
            onClick={this.onIncrementCount}
          >
            Click to increase the counter
          </button>
        </div>
        </div>
        <div>
        <button className={changeColor} onClick={this.handleChangeColor}>
          change color
        </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
