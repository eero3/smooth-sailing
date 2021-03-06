import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from 'react-router-dom'

import { makeReservation } from '../../../api'

const FROM = 'Långnäs'
const TO = 'Husö'
const DATE = '12.12.2018'
const TIME = '4:30'

const Confirm = ({ history, handleConfirmClick }) => (
  <div className="bg-blue-lighter text-black rounded p-8 text-grey-darker">
    <h2>{FROM} - {TO}</h2>
    <div className="pt-2 font-semibold">
      {DATE} {TIME}
    </div>
    <div className="mt-4">
      <div className="mb-2">Persons: 1</div>
      <div className="text-2xl mb-4">
        <FontAwesomeIcon icon="car-side" />
      </div>
      <div className="mb-4 flex">
        <FontAwesomeIcon
          icon="plus-circle"
          className="cursor-pointer text-blue-dark hover:text-blue-darker mr-2 text-2xl"
        />
        <div className="mt-1">Add another destination</div>
      </div>
      <button
        type="button"
        className="bg-red-dark text-white font-semibold rounded p-3 mr-3"
        onClick={() => history.push('/')}
      >
        Cancel
      </button>
      <button
        type="button"
        className="bg-green-dark text-white font-semibold rounded p-3"
        onClick={() => {
          makeReservation()
          handleConfirmClick()
          history.push('/')
        }}
      >
        Confirm
      </button>
    </div>
  </div>
)

export default withRouter(Confirm)
