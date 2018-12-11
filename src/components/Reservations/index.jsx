import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Units = ({passenger, car, bike}) => (
  <div>
    {passenger > 0
      ? <div>
        {`${passenger} x`} <FontAwesomeIcon icon="male"/>
      </div>
      : null}
    {car > 0
      ? <div>
        {`${car} x`} <FontAwesomeIcon icon="male"/>
      </div>
      : null}
    {bike > 0
      ? <div>
        {`${bike} x`} <FontAwesomeIcon icon="male"/>
      </div>
      : null}
  </div>
)


const ReservationRow = ({id, date, units, startTime, endTime, departureHarbor, destinationHarbor, shipName, handleRemoveClick}) => (
  <li className="reservation-row bg-white cursor-pointer rounded py-3 text-grey-darkest hover:bg-grey-lighter px-3 py-1">
    <div className="reservation-date">{date}</div>
    <div className="reservation-units">
      <Units {...units}/>
    </div>
    <div className="reservation-harbor">{`${departureHarbor} (${startTime})`}</div>
    <div className="reservation-harbor">{`${destinationHarbor} (${endTime})`}</div>
    <div className="reservation-vessel">{shipName}</div>
    <div className="reservation-controls">
      <FontAwesomeIcon
        onClick={() => handleRemoveClick(id)}
        icon="trash"
        className="text-grey-darker hover:text-grey-darkest mr-3"/>
    </div>
  </li>
)

const ReservationsHeader = () => (
  <li className="timetable-row font-semibold bg-blue py-2 px-3">
    <div className="reservation-date">Date</div>
    <div className="reservation-units">Information</div>
    <div className="reservation-harbor">Departure</div>
    <div className="reservation-harbor">Arrival</div>
    <div className="reservation-vessel">Vessel</div>
    <div className="reservation-controls">Cancel</div>
  </li>
)

const Reservations = ({reservations, handleRemoveClick}) => {
  return (
    <div className="segment-length flex justify-center flex-col sm:w-full ml-1 sm:ml-3 lg:ml-5 sm:mx-1">
      <div className="bg-blue-lighter p-1 sm:p-2 rounded">
        <h3 className="text-grey-darker mb-3">Upcoming trips</h3>
        <ul className="list-reset ">
          <ReservationsHeader/>
          {reservations.map(t => <ReservationRow key={t.id} {...t} handleRemoveClick={handleRemoveClick}/>)}
        </ul>
      </div>
    </div>
  )
}

export default Reservations
