import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleInitialData } from '../actions/shared'
import Polls from './Polls'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render () {
    return (
      <div>
        Starter Code.
        <Polls />
      </div>
    )
  }
}

export default connect()(App)
