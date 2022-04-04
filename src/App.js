import logo from "./logo.svg";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cssTransition } from "react-toastify";
import "./modal.css";
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

function App() {
  const [selected, setSelected] = useState("basicc"); //control by setSelected

  return (
    <>
      <button
        className={selected === "expenses" ? "selected-btn" : ""}
        onClick={(e) => setSelected("expenses")}
      >
        Expenses
      </button>
      <button
        className={selected === "basic" ? "selected-btn" : ""}
        onClick={(e) => setSelected("basic")}
      >
        Basic
      </button>
      <button
        className={selected === "billing" ? "selected-btn" : ""}
        onClick={(e) => setSelected("billing")}
      >
        Billing List
      </button>
      <button
        className={selected === "" ? "selected-btn" : ""}
        onClick={(e) => setSelected("")}
      >
        Nothing
      </button>
      {/* <p>{selected}</p> */}
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
      {selected === "billing" && <BillingList/>}
    </>
  );
}
export default App;
