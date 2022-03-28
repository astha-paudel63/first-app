import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { isElementOfType } from "react-dom/test-utils";
import { useEffect } from "react";
import ExpensesItem from "./ExpensesItem";


function ExpensesList() {
  // const { name, location, coOrdinates: {latitude, longitude}, age, primes } = props;
  const [productName, setProductName] = useState("");
  const [pricep, productp] = useState(0);
  const [products, setproducts] = useState([]);
  const[dates,setDates] = useState(new Date())
  const [editState,setEditState] = useState(false);
  const [selectedProduct,setSelectProduct]=useState(null);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    console.log('changed!!!')
    if(!editState) {
      setProductName('');
      productp(0);
    }
  },[editState]);

  const handleAddUpdateProduct = (e) => {
    if(!editState){
    setproducts([
      ...products,
      { id: Date(), name: productName, price: pricep },
    ]);
  }
  else{
    setproducts(products.map(p =>{
      if(p.id===selectedProduct.id){
        return{
          ...p,
          name : productName,
          price : pricep,

        }
      }
      return p;
    }))
    setEditState(false);
  }
    setProductName("");
    productp(0);
  };
  const handelRemoveProduct = (id) =>
    setproducts(products.filter((p) => p.id !== id));

  const handelLetEditProduct = (product) => {
    setEditState(true);
    setSelectProduct(product);
    setProductName(product.name);
    productp(product.price);
  };
  return (
    <div className="App">
      
      
      <h1>Expenses</h1>
      <ol>
        {products.map((car) => (
          <ExpensesItem
          key={car.id}
          expenses ={car}
          handelLetEditProduct={handelLetEditProduct}
          handelRemoveProduct={handelRemoveProduct} />
          // <li key={car.id}>
          //   <span>{moment(car.date).format("MMMM/DD/YYYY")}</span>
          //   <span>{car.name}</span>
          //   <span>{car.price}</span>
          //   <button onClick={(f) => handelLetEditProduct(car)}>Edit</button>
          //   <button onClick={(e) => handelRemoveProduct(car.id)}>X</button>
          // </li>
        ))}
      </ol>
      <div>
        <span>total</span>
        <span> {products.reduce((a,v) => a + +v.price, 0)}</span>
      </div>
      <div className="input">
      <input
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="number"
        value={pricep}
        onChange={(f) => productp(f.target.value)}
      />
      <input 
      type="Date"
      value={dates}
      onChange={(f) => setDates(f.target.value)}/>
      </div>
      <button onClick={handleAddUpdateProduct}>{editState?"update":"add"}</button>
     {editState? <button onClick={e => setEditState(false)}>cancel</button>:null}
    </div>
  );
}
export default ExpensesList;
