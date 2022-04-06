import logo from "./logo.svg";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cssTransition } from "react-toastify";
// import "./modal.css";
import "./App.css";
import Counter from "./Counter";
import React, { useState } from "react";
import { isElementOfType } from "react-dom/test-utils";
import { useEffect, useRef, Fragment } from "react";
import ExpensesList from "./ExpensesList";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import Modal from "react-modal";
import BasicList from "./BasicList";
import BillingList from "./BillingList";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [selected, setSelected] = useState("basicc"); //control by setSelected

  return (
    <>
      <div className="welcome">
        <Link to="/">
        <h1>welcome to my first app</h1>
        </Link>
      </div>
      {/* <h1>Welcome to React Router!</h1> */}
      <Link to="/home">Home</Link>
      <Link to="/billing">Billing</Link>
      <Link to="/basic">Basic</Link>
      <Routes>
        <Route
          path="/"
          element={
            <BasicList
              name="React"
              age={20}
              location={"Lalitpur"}
              coOrdinates={{
                longitude: 80,
                latitude: 27,
              }}
              primes={[2, 3, 5, 7, 11, 13]}
            />
          }
        />
        <Route
          path="basic"
          element={
            <BasicList
              name="React"
              age={20}
              location={"Lalitpur"}
              coOrdinates={{
                longitude: 80,
                latitude: 27,
              }}
              primes={[2, 3, 5, 7, 11, 13]}
            />
          }
        />
        <Route path="billing" element={<BillingList />} />
        <Route path="*" element={<Counter />} />
      </Routes>
      {/* <div className="header-wapper">
        <div className="header">
          <div className="Expenese">
            <button
              className={selected === "expenses" ? "selected-btn" : ""}
              onClick={(e) => setSelected("expenses")}
            >
              Expenses
            </button>
          </div>
          <div className="basic">
            <button
              className={selected === "basic" ? "selected-btn" : ""}
              onClick={(e) => setSelected("basic")}
            >
              Basic
            </button>
          </div>
          <div className="billing">
            <button
              className={selected === "billing" ? "selected-btn" : ""}
              onClick={(e) => setSelected("billing")}
            >
              Billing List
            </button>
          </div>
          <div className="nothing">
            <button
              className={selected === "" ? "selected-btn" : ""}
              onClick={(e) => setSelected("")}
            >
              Nothing
            </button>
          </div>

          {selected === "basic" && (
            <BasicList
              name="React"
              age={20}
              location={"Lalitpur"}
              coOrdinates={{
                longitude: 80,
                latitude: 27,
              }}
              primes={[2, 3, 5, 7, 11, 13]}
            />
          )}
          {selected === "expenses" && <ExpensesList />}
          {selected === "billing" && <BillingList />}
        </div>
      </div> */}
    </>
  );
}
export default App;
