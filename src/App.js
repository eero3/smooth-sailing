import React, { Component } from 'react';
import Main from './components/Main'

import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCompass,
  faAnchor,
  faCalendarAlt,
  faCarSide,
  faMale,
  faFemale,
  faBicycle,
  faExchangeAlt,
  faArrowRight,
  faUser,
  faCaretDown,
  faTrash
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
  faArrowRight,
  faUser,
  faCaretDown,
  faTrash
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
