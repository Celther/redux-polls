import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleAddPoll } from '../actions/polls'

class AddPoll extends Component {
  state = {
    question: '',
    a: '',
    b: '',
    c: '',
    d: '',
  }

  handleInputChange = (e) => {
    const { name, value } = e.target

    this.setState((prevState) => ({
      [name]: value
    }))
  }

  isDisabled = () => {
    const { question, a, b, c, d } = this.state

    return question === ''
      || a === ''
      || b === ''
      || c === ''
      || d === ''
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.history.push('/')
    this.props.dispatch(handleAddPoll(this.state))
  }

  render() {
    const { question, a, b, c, d } = this.state

    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <h3 style={{marginBottom: 5}}>What is your Question?</h3>
        <input
          name="question"
          value={question}
          onChange={this.handleInputChange}
          type="text"
          className="input"
        />

        <h3>What are the options?</h3>
        <label className="label" htmlFor="a">A.</label>
        <input
          name="a"
          value={a}
          onChange={this.handleInputChange}
          className="input"
          type="text"
          id="a"
        />
        <label className="label" htmlFor="b">B.</label>
        <input
          name="b"
          value={b}
          onChange={this.handleInputChange}
          className="input"
          type="text"
          id="b"
        />
        <label className="label" htmlFor="c">C.</label>
        <input
          name="c"
          value={c}
          onChange={this.handleInputChange}
          className="input"
          type="text"
          id="c"
        />
        <label className="label" htmlFor="d">D.</label>
        <input
          name="d"
          value={d}
          onChange={this.handleInputChange}
          className="input"
          type="text"
          id="d"
        />
        <button type="submit" className="btn" disabled={this.isDisabled()}>
          Submit
        </button>
      </form>
    )
  }
}

export default connect()(AddPoll)
