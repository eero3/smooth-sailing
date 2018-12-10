import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../Header'
import Booking from '../Booking'


const Main =  () => (
  <BrowserRouter >
    <div>
      <Header />
      <Route exact path="/" component={Booking} />
    </div>
  </BrowserRouter>
)

export default Main
