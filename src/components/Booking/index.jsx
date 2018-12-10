import React, { Component } from 'react';
import CompassLoader from '../Loader'
import BookingForm from './Form'

class Booking extends Component {

  state = {
    isLoading: false
  }

  render() {
    const { isLoading } = this.state
    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-screen w-screen">
          <CompassLoader />
        </div>
      )
    }

    return (
      <div>
        <BookingForm />
      </div>
    )

  }
}

export default Booking
