import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CompassLoader = () => (
  <div className="text-grey-light text-center">
    <FontAwesomeIcon icon="compass" className="fa-spin text-5xl"/>
    <div className="text-1xl pt-2 pl-1 italic font-semibold">Loading</div>
  </div>
)

export default CompassLoader
