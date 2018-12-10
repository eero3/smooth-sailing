import React, { Component } from 'react';
import CompassLoader from '../Loader'
import BookingForm from './Form'
import Timetables from './Timetables'
import mockMap from '../../mockmap.png'

const sleep = ms => (
  new Promise(resolve => setTimeout(resolve, ms))
)

class Booking extends Component {

  state = {
    isLoaded: false,
    isLoading: false
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

  renderTimetablesContainer = () => {
    const { isLoading, isLoaded } = this.state

    if (!isLoading && !isLoaded) {
      return null;
    }

    return (
      <div className="flex-1 mb-1 xl:mr-1">
        {isLoading
          ? this.renderLoader()
          : isLoaded ? <Timetables /> : null
        }
      </div>)
  }

  render() {
    const { isLoading, isLoaded } = this.state

    return (
      <div>
        <BookingForm handleSearchClick={this.handleSearchClick}/>
        <div className="booking-form flex justify-center flex-col xl:flex-row sm:w-full ml-1 sm:ml-3 lg:ml-5 sm:mx-1">
          {this.renderTimetablesContainer()}
          <div className="hidden sm:block flex-1 p-2 rounded bg-blue-lighter map-container">
            <div className="mock-map" >
              <img src={mockMap} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Booking

