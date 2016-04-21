import React from 'react'
import moment from 'moment'

export default class HelloMessage extends React.Component {

  constructor() {
    super()
    this.state = { time: Date.now() }
  }

  componentDidMount() {
    setInterval(() => this.setState({ time: Date.now() }, 1000))
  }

  render() {
    return <div>
      The time is {moment(this.state.time).format('MMMM Do YYYY, h:mm:ss a')}
    </div>
  }
}
