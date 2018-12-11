import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {

  return (
    <nav>
      <div className="flex justify-between p-1 sm:mx-2 lg:mx-4 flex">
        <div className="flex justify-start font-medium">
          <div className="mr-2 sm:mr-6">
            <NavLink
              exact
              to="/"
              className="no-underline cursor-pointer text-grey-light hover:text-white"
              activeClassName="font-semibold text-white"
            >
              Booking
            </NavLink>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="ml-2 sm:ml-6">
            <NavLink
              to="/bus"
              className="no-underline cursor-pointer text-grey-light hover:text-white"
              activeClassName="font-semibold text-white"
            >
              Bus Passengers
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
