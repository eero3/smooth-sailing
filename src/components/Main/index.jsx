import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../Header'
import Booking from '../Booking'
import Bus from '../Bus';

const Main =  () => (
  <BrowserRouter >
    <div>
      <Header />
      <Route exact path="/" component={Booking} />
      <Route exact path="/bus" component={Bus} />
    </div>
  </BrowserRouter>
)

export default Main
