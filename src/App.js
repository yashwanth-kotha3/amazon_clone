// src/App.js
import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Orders from './Orders';



const promise = loadStripe("pk_test_51Rh6r6CEwE90YfPySCoflPtGP75zZdm8mBEv7GfavQ6Svk8klgNbhWiNRE8T2k9eS2kzzFzjqeAQ0wrqjEboas4q004chlmR7m");

function App() {
  const[{basket},dispatch]=useStateValue();

  useEffect(()=>{
    // will only run once whrn app component loads.... 

    auth.onAuthStateChanged(authUser =>{
      console.log('the user is>>>',authUser);
      
      if(authUser){
        //the user just logged in /the user was logged in
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      }
      else{
        //the user is logged out
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })
  },[])


  return (
    //BEM
    <Router >
        <div className="app">
          <h1>hello guys this is Yashwanth,lets build the amazon store</h1>
           
          <Routes>
          {/* Homepage route */}
          <Route
             path="/"
             element={
                <>
                  <Header />
                  <Home />
                </>
             }
          />
          <Route
             path="/checkout"
             element={
                <>
                  <Header />
                  <Checkout/>
                </>
             }
          />
          <Route
             path="/login"
             element={
                <>
                  <Login/>
                </>
             }
          />
          <Route
             path="/payment"
             element={
                <>
                  <Header />
                  <Elements stripe={promise}>
                    <Payment/>
                  </Elements>
                </>
             }
          />
          <Route
             path="/orders"
             element={
                <>
                  <Header/>
                  <Orders/>
                </>
             }
          />
          

          
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
