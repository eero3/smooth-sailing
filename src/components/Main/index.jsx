import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../Header'
import Booking from '../Booking'
import Bus from '../Bus';
import Navigation from '../Navigation'
import ConfirmBooking from '../Booking/Confirm'
import Reservations from '../Reservations'
import { cancelReservation} from '../../api'

const getReservation =(id, date, units, startTime, endTime, departureHarbor, destinationHarbor, shipName) =>
  ({id, date, units, startTime, endTime, departureHarbor, destinationHarbor, shipName})

const getUnits = (passenger, car, bike) => ({
  passenger, car, bike
})

class Main extends Component {
  state = {
    user: {
      firstName: "Anton",
      lastName: "Manninen"
    },
    reservations: [
      getReservation(1, "10.01.2019", getUnits(1, 1, 0), "4:30", "5:05", "Långnäs", "Husö", "M/S Doppingen"),
      getReservation(2, "20.02.2019", getUnits(1, 0, 1), "4:30", "5:05", "Långnäs", "Husö", "M/S Doppingen"),

    ]
  }

  handleRemoveReservationClick = id => {
    const { reservations } = this.state
    const newReservations = reservations.filter(r => r.id !== id)
    cancelReservation()
      .then(() => this.setState({reservations: newReservations}))
  }

  handleConfirmClick = () => {
    const { reservations } = this.state
    this.setState({reservations: [
        getReservation(5, "12.12.2018", getUnits(1, 1, 0), "4:30", "5:05", "Långnäs", "Husö", "M/S Doppingen"),
        ...reservations]
    })
  }
  render () {
    const { user, reservations } = this.state

    return (
      <BrowserRouter >
        <div>
          <Header user={user}/>
          <Navigation reservations={reservations}/>
          <Route exact path="/" component={Booking} />
          <Route
            exact
            path="/reservations"
            render={(props) => <Reservations {...props} reservations={reservations} handleRemoveClick={this.handleRemoveReservationClick}/> }
          />
          <Route exact path="/bus" component={Bus} />
          <Route exact path="/confirm" render={(props) => <ConfirmBooking {...props} handleConfirmClick={this.handleConfirmClick}/>} />
        </div>
      </BrowserRouter>
    )
  }
}

export default Main
