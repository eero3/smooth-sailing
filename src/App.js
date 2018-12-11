import React, { Component } from 'react';
import Main from './components/Main'
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCompass,
  faAnchor,
  faCalendarAlt,
  faCarSide,
  faMale,
  faFemale,
  faBicycle,
  faExchangeAlt,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faCompass,
  faAnchor,
  faCalendarAlt,
  faCarSide,
  faMale,
  faFemale,
  faBicycle,
  faExchangeAlt,
  faArrowRight
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
       
      </div>
    );
  }
}

export default App;
