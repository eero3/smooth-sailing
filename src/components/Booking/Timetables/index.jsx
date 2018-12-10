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
      getStatusItem("yellow", ["car-side"])
    ]),
  getMockStatus(2, "10.12.2018", "5:05", "5:50", "M/S Doppingen",
    [
      getStatusItem("green", ["male", "female"]),
      getStatusItem("green", ["bicycle"]),
      getStatusItem("green", ["car-side"])
    ])
]

const TimetableRow = ({id, date, startTime, endTime, shipName, statusItems}) => (
  <li
    className="timetable-row cursor-pointer rounded p-3 text-gray hover:bg-grey-lighter"
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
  <li className="font-semibold bg-blue timetable-row">
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
