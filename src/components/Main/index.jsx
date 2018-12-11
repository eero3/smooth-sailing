import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../Header'
import Booking from '../Booking'
import Bus from '../Bus';
import Navigation from '../Navigation'

class Main extends Component {
  state = {
    user: {name: "Anton Manninen"}
  }

  render () {
    const { user } = this.state

    return (
      <BrowserRouter >
        <div>
          <Header user={user}/>
          <Navigation/>
          <Route exact path="/" component={Booking} />
          <Route exact path="/bus" component={Bus} />
        </div>
      </BrowserRouter>
    )
  }
}

export default Main
