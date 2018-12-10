import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const getMockStatus = (id, date, startTime, endTime, shipName, statusItems) => ({
    id, date, startTime, endTime, shipName, statusItems
  })

const getStatusItem = (color, icons) => (
  {color, icons}
)


const MOCK_TIMETABLES = [
  getMockStatus(1, "10.12.2018", "4:30", "5:05", "M/S Doppingen",
    [
      getStatusItem("green", ["male", "female"]),
      getStatusItem("green", ["bicycle"]),
      getStatusItem("yellow-dark", ["car-side"])
    ]),
  getMockStatus(2, "10.12.2018", "5:05", "5:50", "M/S Doppingen",
    [
      getStatusItem("yellow-dark", ["male", "female"]),
      getStatusItem("red", ["bicycle"]),
      getStatusItem("red", ["car-side"])
    ]),
  getMockStatus(3, "10.12.2018", "5:50", "6:20", "M/S Doppingen",
    [
      getStatusItem("green", ["male", "female"]),
      getStatusItem("green", ["bicycle"]),
      getStatusItem("green", ["car-side"])
    ]),
  getMockStatus(4, "10.12.2018", "6:20", "7:50", "M/S Doppingen",
    [
      getStatusItem("green", ["male", "female"]),
      getStatusItem("green", ["bicycle"]),
      getStatusItem("yellow-dark", ["car-side"])
    ]),
  getMockStatus(5, "10.12.2018", "7:50", "8:20", "M/S Skiftet",
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

const TimetableRow = ({id, date, startTime, endTime, shipName, statusItems}) => (
  <li
    className="timetable-row bg-white cursor-pointer rounded text-grey-darkest hover:bg-grey-lighter px-3 py-1"
    key={id}
  >
    <div className="timetable-date">{date}</div>
    <div className="timetable-time">{startTime}</div>
    <div className="timetable-time">{endTime}</div>
    <div className="timetable-vessel">{shipName}</div>
    <div className="timetable-status">
      <div className="flex justify-center">
        {statusItems.map(item => (
          <div className={`timetable-status-item border-${item.color}`}>
            {item.icons.map(i => <FontAwesomeIcon icon={i} />)}
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

const Timetables = () => (
  <div className="bg-blue-lighter p-1 sm:p-2 rounded">
    <ul className="list-reset">
      <TimetableHeader/>
      {MOCK_TIMETABLES.map(t => <TimetableRow key={t.id} {...t} />)}
    </ul>

  </div>

)

export default Timetables
