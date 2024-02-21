// Write your code here
import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {isSub: true}

  subscribe = () => {
    this.setState(prevState => ({isSub: false}))
  }

  subscribed = () => {
    this.setState(prevState => ({isSub: true}))
  }

  render() {
    const {isSub} = this.state
    return (
      <div>
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        {isSub ? (
          <button type="button" onClick={this.subscribe}>
            Subscribe
          </button>
        ) : (
          <button type="button" onClick={this.subscribed}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}
export default Welcome
