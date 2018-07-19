import React, { Component } from 'react'

class AddPoll extends Component {
  state = {
    
  }

  handleChange = () => {
    console.log('Hi Dere');
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }


  render() {
    const state = this.state

    return (
      <form className="add-poll-container">
        <label>
          <h2>What is your Question?</h2>
          <input name="poll-question"/>
        </label>
        <label>
          <h2>What are the options?</h2>
          <label htmlFor="option-a">A.</label>
          <input
            name="option-a"
            className="input"
          />
          <label htmlFor="option-b">B.</label>
          <input

            name="option-b"
            className="input"
          />
        </label>
        <input type="submit" value="Submit" className="btn"/>
      </form>
    )
  }
}

export default AddPoll
