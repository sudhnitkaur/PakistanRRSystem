import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Showcase from './components/HomePage'
import Footer from './components/Footer'
import Login from './components/Login.js'
import UserLogin from './components/Login copy'
import Services from './components/Services'
import Search from './components/Search'
import Checkin from './components/Checkin'
import TrainList from './components/TrainList'
import AddTrain from './components/AddTrain'
import BookingForm from './components/BookingForm'
import Error from './components/Error'
import PaymentForm from './components/PaymentForm'
import Navbar from './components/Navbar'
import Form from './components/Form'
import { Slider } from '@material-ui/core'
import ButtonBases from './components/ButtonBases'


function App() {
  return (
    <div>
      <Router>
        <Navbar />

        
        <Switch>

          <Route exact path="/">
            <Showcase />
            <Services />
          
            <ButtonBases/>
            <Footer />
          </Route>
          
          <Route exact path="/login">
            <Login />
            <Footer />
            </Route>
            <Route exact path="/Slider">
            <Slider />
            <Footer />
          </Route>
          <Route exact path="/userlogin">
            <UserLogin/>
            <Footer />
          </Route>
          
          <Route exact path="/buttonbases">
            <ButtonBases/>
            <Footer />
          </Route>


          <Route exact path="/checkin">
            <Checkin></Checkin>
            <Footer />
          </Route>
          

          <Route exact path="/payment">
            <PaymentForm></PaymentForm>
            <Footer />
          </Route>

          <Route exact path="/adminTrainList">
            <TrainList></TrainList>
            <Footer />
          </Route>
          


          <Route exact path="/edit-train/:trainId">
            <AddTrain />
            <Footer />
          </Route>

          <Route exact path="/addTrain">
            <AddTrain />
            <Footer />
          </Route>

          <Route exact path="/search">
            <Search />
            <Footer />
          </Route>

          <Route path="/checkin">
            <Checkin />
            <Footer />
          </Route>
          <Route exact path="/booking">
            <BookingForm></BookingForm>
            <Footer />
          </Route>
          <Route exact path="/form">
            <Form/>
            <Footer />
          </Route>
          <Route path='*'>
            <Error />
            <Footer />
          </Route>
          
        </Switch>
        </Router>

        </div>
  );
}

export default App