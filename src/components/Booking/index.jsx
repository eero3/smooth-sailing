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
    fakeReservationStatus: false,
    startPoint: null,
    endPoint: null
  }

  componentDidMount() {
    this.checkReservationStatus()
    this.poller = setInterval(this.checkReservationStatus, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.poller)
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

  startClick = () => {
    this.setState({ startPoint: 'Långnäs' })
  }

  endClick = () => {
    this.setState({ endPoint: 'Husö' })
  }

  startChange = (e) => {
    const value = e.target.value
    this.setState({ startPoint: value })
  }

  endChange = (e) => {
    const value = e.target.value
    this.setState({ endPoint: value })
  }

  render() {
    const { fakeReservationStatus, isLoaded } = this.state

    return (
      <div>
        <BookingForm
          handleSearchClick={this.handleSearchClick}
          startPoint={this.state.startPoint}
          endPoint={this.state.endPoint}
          startChange={this.startChange}
          endChange={this.endChange}
        />
        <div className="booking-form flex justify-center flex-col xl:flex-row sm:w-full ml-1 sm:ml-3 lg:ml-5 sm:mx-1">
          {this.renderTimetablesContainer(fakeReservationStatus)}
          <div className="hidden sm:block flex-1 p-2 rounded bg-blue-lighter map-container">
            <div className="text-grey-darker">
              <MapTest loaded={isLoaded} zoom={10} position={[60.11145, 20.51089]} startClick={this.startClick} endClick={this.endClick} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Booking
