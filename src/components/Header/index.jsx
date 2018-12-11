import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({user}) => (
  <header className="h-12 flex justify-between mb-2 sm:mb-2">
    <h1 className="p-1 text-3xl italic sm:ml-2 lg:ml-3">Smooth Sailing</h1>
    <div className="mt-3 mr-2 lg:mk-3 cursor-pointer">
      <FontAwesomeIcon icon="user" className="mr-1"/>
      <span className="font-semibold">{user.firstName}</span>
      <FontAwesomeIcon icon="caret-down" className="ml-1"/>
    </div>
  </header>
)

export default Header
