import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router-dom'


const getMockStatus = (id, date, startTime, endTime, shipName, statusItems) => ({
    id, date, startTime, endTime, shipName, statusItems
  })

const getStatusItem = (color, icons) => (
  {color, icons}
)


const getMockTimetables = (status) => [
  getMockStatus(1, "12.12.2018", "4:30", "5:05", "M/S Doppingen",
    [
      getStatusItem("green", ["male", "female"]),
      getStatusItem("green", ["bicycle"]),
      getStatusItem(status ? "red" : "yellow-dark", ["car-side"])
    ]),
  getMockStatus(2, "12.12.2018", "5:05", "5:50", "M/S Doppingen",
    [
      getStatusItem("yellow-dark", ["male", "female"]),
      getStatusItem("red", ["bicycle"]),
      getStatusItem("red", ["car-side"])
    ]),
  getMockStatus(3, "12.12.2018", "5:50", "6:20", "M/S Doppingen",
    [
      getStatusItem("green", ["male", "female"]),
      getStatusItem("green", ["bicycle"]),
      getStatusItem("green", ["car-side"])
    ]),
  getMockStatus(4, "12.12.2018", "6:20", "7:50", "M/S Doppingen",
    [
      getStatusItem("green", ["male", "female"]),
      getStatusItem("green", ["bicycle"]),
      getStatusItem("yellow-dark", ["car-side"])
    ]),
  getMockStatus(5, "12.12.2018", "7:50", "8:20", "M/S Skiftet",
    [
      getStatusItem("green", ["male", "female"]),
      getStatusItem("green", ["bicycle"]),
      getStatusItem("yellow-dark", ["car-side"])
    ]),
  getMockStatus(6, "13.12.2018", "4:30", "5:05", "M/S Gudingen",
    [
      getStatusItem("green", ["male", "female"]),
      getStatusItem("yellow-dark", ["bicycle"]),
      getStatusItem("green", ["car-side"])
    ]),
  getMockStatus(7, "13.12.2018", "14:10", "15:55", "M/S Odin",
    [
      getStatusItem("green", ["male", "female"]),
      getStatusItem("green", ["bicycle"]),
      getStatusItem("green", ["car-side"])
    ]),
  getMockStatus(8, "13.12.2018", "16:05", "17:50", "M/S Skiftet",
    [
      getStatusItem("green", ["male", "female"]),
      getStatusItem("red", ["bicycle"]),
      getStatusItem("yellow-dark", ["car-side"])
    ]),
  getMockStatus(9, "13.12.2018", "17:30", "18:05", "M/S Gudingen",
    [
      getStatusItem("green", ["male", "female"]),
      getStatusItem("yellow-dark", ["bicycle"]),
      getStatusItem("green", ["car-side"])
    ]),
  getMockStatus(10, "13.12.2018", "19:10", "20:55", "M/S Odin",
    [
      getStatusItem("green", ["male", "female"]),
      getStatusItem("green", ["bicycle"]),
      getStatusItem("green", ["car-side"])
    ])
]

const TimetableRow = ({id, date, startTime, endTime, shipName, statusItems, onClick}) => (
  <li
    className="timetable-row bg-white cursor-pointer rounded text-grey-darkest hover:bg-grey-lighter px-3 py-1"
    key={id}
    onClick={onClick}
  >
    <div className="timetable-date">{date}</div>
    <div className="timetable-time flex justify-end">
      {startTime}
      <FontAwesomeIcon icon="arrow-right" className="hidden sm:block ml-1 pt-1 text-grey-darker"/>
    </div>
    <div className="timetable-time flex justify-end">
      <FontAwesomeIcon icon="anchor" className="hidden sm:block mr-1 pt-1 text-grey-darker" />
      {endTime}
    </div>
    <div className="timetable-vessel">{shipName}</div>
    <div className="timetable-status">
      <div className="justify-center hidden sm:flex">
        {statusItems.map(item => (
          <div className={`timetable-status-item border-${item.color}`}>
            {item.icons.map(i => <FontAwesomeIcon key={i} icon={i} className={`text-${item.color}`}/>)}
          </div>
        ))}
      </div>
      <div className="justify-center flex sm:hidden">
        {statusItems.map(item => (
            <div className="mr-1">
              {item.icons.filter(f => f !== "bicycle")
                .map(i => <FontAwesomeIcon key={i} icon={i} className={`text-${item.color}`}/>)}
            </div>
          ))}

      </div>
    </div>
  </li>
)

const TimetableHeader = () => (
  <li className="timetable-row font-semibold bg-blue py-2 px-3">
    <div className="timetable-date">Date</div>
    <div className="timetable-time">Departs</div>
    <div className="timetable-time">Arrives</div>
    <div className="timetable-vessel">Vessel</div>
    <div className="timetable-status">Booking Status</div>
  </li>
)

const Timetables = ({ reservationStatus, history }) => (
  <div className="bg-blue-lighter p-1 sm:p-2 rounded">
    <ul className="list-reset">
      <TimetableHeader/>
      {getMockTimetables(reservationStatus).map(t => <TimetableRow key={t.id} {...t} onClick={() => history.push('/confirm')} />)}
    </ul>
  </div>
)

export default withRouter(Timetables)
