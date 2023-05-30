// eslint-disable react-hooks/exhaustive-deps
import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Orders from "./Orders";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import Payment from "./Payment";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe } from "@stripe/react-stripe-js";
import KommunicateChat from "./Chat";

const promise = loadStripe(
  "pk_test_51MwVPLSCIojwSyI5eS1meytj6L4Kr17GAxmtZtRSqzeOU79ExgWDyEFTfjoQneFACstb0Gu068VXU7HtdZVoJ9Qw00mEbRknQ8"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>", authUser);

      if (authUser) {
        // logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // uswer logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/" element={<Header />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/" element={<KommunicateChat />} />
          <Route
            exact
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />{" "}
              </Elements>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
