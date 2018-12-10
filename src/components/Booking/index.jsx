import React, { Component } from 'react';
import CompassLoader from '../Loader'
import BookingForm from './Form'
import Timetables from './Timetables'

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
        <div className="booking-form flex justify-center flex-col xl:flex-row sm:w-full ml-1 sm:ml-3 lg:ml-5 sm:mx-1">
          <div className="flex-1 mb-1 xl:mr-1">
           <Timetables />
          </div>
          <div className="hidden sm:block flex-1 p-2 rounded bg-blue-lighter">
            <div className="text-grey-darker">MAP PLACEHOLDER</div>
          </div>
        </div>
      </div>
    )

  }
}

export default Booking
