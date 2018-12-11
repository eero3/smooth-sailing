import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../Header'
import Booking from '../Booking'
import Bus from '../Bus';
import Navigation from '../Navigation'
import ConfirmBooking from '../Booking/Confirm'

class Main extends Component {
  state = {
    user: {
      firstName: "Anton",
      lastName: "Manninen"
    }
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
          <Route exact path="/confirm" component={ConfirmBooking} />
        </div>
      </BrowserRouter>
    )
  }
}

export default Main
