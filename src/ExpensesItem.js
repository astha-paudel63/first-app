import React from "react";
import moment from "moment";
import "./Expenses.css";
import { MdOutlineDeleteSweep } from 'react-icons/md';
import { MdEditNote } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ExpensesItem = ({expenses,handelLetEditProduct,handelRemoveProduct}) => {
    return(
        <div className="products" key={expenses.id}>
        <div className="date">
        <span>{moment(expenses.date).format("MMMM/DD/YYYY")}</span>
        </div>
        <div className="name">
        <span>{expenses.name}</span>
        </div>
        <div className="price">
        <span>{expenses.price}</span>
        </div>
        <div className="quantity">
        <span>{expenses.quantity}</span>
        </div>
        <div className="edit">
          <tooltip title="EDIT" >
            <button onClick={(f) => handelLetEditProduct(expenses)}><MdEditNote color={'#fffff'} size={20}/></button>
          </tooltip>
        </div>
        <div className="remove">
          <tooltip title="DELETE">
            <button onClick={(e) => handelRemoveProduct(expenses.id)}><MdOutlineDeleteSweep color={'#fffff'} size={20}/></button>
          </tooltip>
        </div>
      </div>
    )
}

export default ExpensesItem;
