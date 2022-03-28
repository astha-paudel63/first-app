import React from "react";
import moment from "moment";

const ExpensesItem = ({expenses,handelLetEditProduct,handelRemoveProduct}) => {
    return(
        <li key={expenses.id}>
        <span>{moment(expenses.date).format("MMMM/DD/YYYY")}</span>
        <span>{expenses.name}</span>
        <span>{expenses.price}</span>
        <button onClick={(f) => handelLetEditProduct(expenses)}>Edit</button>
        <button onClick={(e) => handelRemoveProduct(expenses.id)}>X</button>
      </li>
    )
}

export default ExpensesItem;
