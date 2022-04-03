import logo from "./logo.svg";
import "./App.css";
import "./Expenses.css";
import React, { useState, useRef} from "react";
import { isElementOfType } from "react-dom/test-utils";
import { useEffect } from "react";
import ExpensesItem from "./ExpensesItem";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cssTransition } from 'react-toastify';


function ExpensesList() {
  // const { name, location, coOrdinates: {latitude, longitude}, age, primes } = props;
  const [productName, setProductName] = useState("");
  const [pricep, productp] = useState(0);
  const [products, setproducts] = useState([]);
  const[dates,setDates] = useState(new Date());
  const[quantity,setQuantity] =useState(0);
  const [editState,setEditState] = useState(false);
  const [selectedProduct,setSelectProduct]=useState(null);
  const [total, setTotal] = useState(0);
  const nameInputRef =useRef(null);
  const priceInputRef = useRef(null);
  const quantityInputRef = useRef(null);
  const [value, setValue] = useState(0);
  const [multiply,setMultiply] =useState(0);
 
  const dateInputRef = useRef(null);
  useEffect(() => {
    console.log('changed!!!')
    if(!editState) {
      setProductName('');
      productp(0);
      setQuantity(0);
    }
  },[editState]);

  const handleAddUpdateProduct = (e) => {
    if(!editState){
    setproducts([
      ...products,
      { id: Date(), name: productName, price: pricep, quantity: quantity},
    ]);
    localStorage.setItem('products',JSON.stringify([
      ...products,
      { id: Date(), name: productName, price: pricep, quantity: quantity },
    ]))
    toast.success("product "+ productName+" created "+ " priced RS. "+pricep);
  }
  else{
    setproducts(products.map(p =>{
      if(p.id===selectedProduct.id){
        return{
          ...p,
          name : productName,
          price : pricep,
          quantity: quantity,

        }
      }
      return p;
      
    }))
    localStorage.setItem('products',JSON.stringify(products.map(p =>{
      if(p.id===selectedProduct.id){
        return{
          ...p,
          name : productName,
          price : pricep,
          quantity: quantity,

        }
      }
      return p;
    })))
    toast.success("Product Update");
    setEditState(false);
  }
    setProductName("");
    productp(0);
    setQuantity(0);
  };
  const handelRemoveProduct = (id) =>
  {
    setproducts(products.filter((p) => p.id !== id));
    // localStorage.setItem('products',JSON.stringify(products.fliter((p) => p.id !== id )))
    toast.warning("product REMOVE ");
  } 

  const handelLetEditProduct = (product) => {
    setEditState(true);
    setSelectProduct(product);
    setProductName(product.name);
    productp(product.price);
   setQuantity(product.quantity);
   nameInputRef?.current.focus();
  
  };
  const handelPressEnterName = (e) =>{
    console.log(e);
    if(e.code==="Enter")
    {
      priceInputRef?.current.focus()
    }
  };
  const handelPressEnterPrice =(e) =>{
    if(e.code==="Enter")
    {
      quantityInputRef?.current.focus()
    }
  };
  const handelPressEnterquantity =(e) =>{
    if(e.code==="Enter")
    {
      dateInputRef?.current.focus()
    }
  };
  const handelPressEnterdate = (e) =>{
    if(e.code==="Enter")
    {
      handleAddUpdateProduct();
      nameInputRef?.current.focus()
    }
  };
  useEffect(() => {
    const a = localStorage.getItem('products');
    if(a){
      setproducts(JSON.parse(a));
    }
  },[])
  return (
    <div className="App">
      
      
      <h1>Expenses</h1>
      <div className="product-container">
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
      </div>
      <div className="total-wapper">
      <div className="total">
        <span className="total-name">total</span>
        <span className="total-number">{products.reduce((a,v) => a + +v.price *v.quantity, 0)}</span>
      </div>
      </div>
      < div className="input">
      < div className="name-wapper">
        <h2>Name</h2>
      <input
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        ref ={nameInputRef}
        onKeyPress ={handelPressEnterName}
      />
      </div>
      <div className="price-wapper">
      <h2>Price</h2>
      <input
        type="number"
        value={pricep}
        onChange={(f) => productp(f.target.value)}
        ref ={priceInputRef}
        onKeyPress ={handelPressEnterPrice}
      />
      </div>
      <div className="quantity-wapper">
      <h2>Quantity</h2>  
     <input
       type="number"
       value={quantity}
     onChange={(f) => setQuantity(f.target.value)}
     ref ={quantityInputRef}
        onKeyPress ={handelPressEnterquantity}

     />
     </div>
     <div className="date-wapper">
      <h2>date</h2>
      <input 
      type="Date"
      value={dates}
      onChange={(f) => setDates(f.target.value)}
      ref ={dateInputRef}
      onKeyPress ={handelPressEnterdate}

        />
      </div>
      </div>
      <div className="add">
      <button onClick={handleAddUpdateProduct}>{editState?"update":"add"}</button>
      </div>
      <div className="cancel">
     {editState? <button onClick={e => setEditState(false)}>cancel</button>:null}
     </div>
     <ToastContainer
        draggable
        pauseOnHover
        position="bottom-right"
        newestOnTop
        autoClose={9000}
        transition={Slide}
      />
      </div>
    
    
  );
}

export default ExpensesList;
