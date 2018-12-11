import React, { Component } from 'react';
import CompassLoader from '../Loader'
import BookingForm from './Form'
import Timetables from './Timetables'
import MapTest from '../MapTest'

import { reservationStatus } from '../../api'

const sleep = ms => (
  new Promise(resolve => setTimeout(resolve, ms))
)

class Booking extends Component {

  state = {
    fakeReservationStatus: false
  }

  componentDidMount() {
    this.checkReservationStatus()
    this.poller = setInterval(this.checkReservationStatus, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.poller)
  }

  handleVehiclesSave = (units) => {
    console.log(units)
  }

  checkReservationStatus = () => {
    reservationStatus()
      .then(res => res.json())
      .then(status => this.setState({ fakeReservationStatus: status.value }))
  }

  handleSearchClick = () => {
    this.setState({isLoading: true},
      async () =>  {
        await sleep(1000)
        this.setState({isLoading: false, isLoaded: true})
      })
  }

  renderLoader = () => (
    <div className="flex justify-center items-center h-64">
      <CompassLoader />
    </div>
  )

  renderTimetablesContainer = (fakeReservationStatus) => {
    const { isLoading, isLoaded } = this.state

    if (!isLoading && !isLoaded) {
      return null;
    }

    return (
      <div className="flex-1 mb-1 xl:mr-1">
        {isLoading
          ? this.renderLoader()
          : isLoaded ? <Timetables reservationStatus={fakeReservationStatus} /> : null
        }
      </div>)
  }

  render() {
    const { fakeReservationStatus, isLoaded } = this.state

    return (
      <div>
        <BookingForm handleSearchClick={this.handleSearchClick} handleVehiclesSave={this.handleVehiclesSave}/>
        <div className="booking-form flex justify-center flex-col xl:flex-row sm:w-full ml-1 sm:ml-3 lg:ml-5 sm:mx-1">
          {this.renderTimetablesContainer(fakeReservationStatus)}
          <div className="hidden sm:block flex-1 p-2 rounded bg-blue-lighter map-container">
            <div className="text-grey-darker">
              <MapTest loaded={isLoaded} zoom={10} position={[60.11145, 20.51089]}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Booking
