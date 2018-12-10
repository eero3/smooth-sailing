import React, { Component } from 'react';
import CompassLoader from '../Loader'
import BookingForm from './Form'
import MapTest from '../MapTest'

class Booking extends Component {

  state = {
    isLoading: false
  }

  render() {
    const { isLoading } = this.state
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
        <div className="hidden sm:block flex-1 p-2 rounded bg-blue-lighter">
          <div className="text-grey-darker"><MapTest /></div>
        </div>
      </div>
    )

  }
}

export default Booking


