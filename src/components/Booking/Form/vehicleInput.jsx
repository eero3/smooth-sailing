import React, {Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class VehicleInput extends Component {
  state = {
    isOpen: false,
    units: {
      passenger: 1,
      car: 0,
      bike: 0
    }
  }

  handleAddPassenger = () => {
    const { units } = this.state
    const oldPassenger = units.passenger
    const newUnits = {...units, passenger: oldPassenger + 1}
    this.setState({units: newUnits })
  }

  handleRemovePassenger = () => {
    const { units } = this.state
    const oldPassenger = units.passenger
    const newUnits = {...units, passenger: oldPassenger - 1}
    this.setState({units: newUnits })
}

  handleAddCar = () => {
    const { units } = this.state
    const oldCar = units.car
    const newUnits = {...units, car: oldCar + 1}
    this.setState({units: newUnits })
  }

  handleRemoveCar = () => {
    const { units } = this.state
    const oldCar = units.car
    const newUnits = {...units, car: oldCar - 1}
    this.setState({units: newUnits })
  }

  handleAddBike = () => {
    const { units } = this.state
    const oldBike = units.bike
    const newUnits = {...units, bike: oldBike + 1}
    this.setState({units: newUnits })
  }

  handleRemoveBike = () => {
    const { units } = this.state
    const oldBike = units.bike
    const newUnits = {...units, bike: oldBike - 1}
    this.setState({units: newUnits })
  }

  handleSaveClick = () => {
    const { handleSelectClick } = this.props;
    this.setState({isOpen: false},
      () => handleSelectClick(this.state.units))
  }

  openModal = () => {
    this.setState({ isOpen: true })
  }

  closeModal = () => {
    this.setState({ isOpen: false})
  }

  renderModal = () => {
    const { isOpen, units } = this.state
    if (!isOpen) {
      return null
    }

    const { passenger, car, bike } = units
    return (
      <div className="vehicle-modal text-grey-darker absolute bg-white rounded p-2 mt-4">
        <div className="flex justify-end">
          <FontAwesomeIcon icon="times" className="cursor-pointer" onClick={this.closeModal}/>
        </div>
        <div className="mt-1 w-48">
          <h3 className="mb-2 text-base">Passengers</h3>
          <div className="flex mb-4 justify-between w-full">
            <div>Passengers</div>
            <div className="flex justify-around">
              <FontAwesomeIcon
                icon="minus"
                className="cursor-pointer hover:text-black"
                onClick={this.handleRemovePassenger}
              />
              <div className="mx-2">{passenger}</div>
              <FontAwesomeIcon
                icon="plus"
                className="cursor-pointer hover:text-black"
                onClick={this.handleAddPassenger}
              />
            </div>
          </div>
          <h3 className="my-2 text-base">Vehicles</h3>
          <div className="flex flex-col">
            <div className="flex mb-2 justify-between w-full">
              <div>Cars</div>
              <div className="flex">
                <FontAwesomeIcon
                  icon="minus"
                  className="cursor-pointer hover:text-black"
                  onClick={this.handleRemoveCar}
                />
                <div className="mx-2">{car}</div>
                <FontAwesomeIcon
                  icon="plus"
                  className="cursor-pointer hover:text-black"
                  onClick={this.handleAddCar}
                />
              </div>
            </div>
            <div className="flex mb-1 justify-between w-full">
              <div>Bikes</div>
              <div className="flex">
                <FontAwesomeIcon
                  icon="minus"
                  className="cursor-pointer hover:text-black"
                  onClick={this.handleRemoveBike}
                />
                <div className="mx-2 mb-4">{bike}</div>
                <FontAwesomeIcon
                  icon="plus"
                  className="cursor-pointer hover:text-black"
                  onClick={this.handleAddBike}
                />
              </div>
            </div>
            <button
              className="w-1/2 bg-green-dark hover:bg-green-darker p-2 rounded text-white"
              type="button"
              onClick={this.handleSaveClick}
            >
              Select
            </button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { units } = this.state;
    const { passenger, car, bike } = units
    let text = `${passenger} passenger`
    if(car > 0){
      text = `${text}, ${car} car`
    }
    return (
      <div
        id="vehicleInput"
        className="vehicle-input flex-grow flex-shrink mb-1 sm:m-1 w-full sm:w-auto relative bg-white rounded cursor-pointer"
      >
        <button type="button" className="w-full h-full text-left pl-8" onClick={this.openModal}>{text}</button>
        {this.renderModal()}
        <FontAwesomeIcon icon="user" className="vehicle-icon absolute text-grey-darker"/>
      </div>
    )
  }
}

export default VehicleInput
