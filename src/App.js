import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import React, { useState } from "react";
import { isElementOfType } from "react-dom/test-utils";

const cars = [
  {
    name: "BMW",
    price: 400,
  },
  {
    name: "Bentley",
    price: 300,
  },
  {
    name: "Tesla",
    price: 300,
  },
  {
    name: "Lamborghini",
    price: 300,
  },
  {
    name: "Mercedez",
    price: 300,
  },
  {
    name: "Porsche",
    price: 300,
  },
  {
    name: "Buggatti",
    price: 300,
  },
  {
    name: "Ferrari",
    price: 300,
  },
];

function App({
  name,
  location,
  coOrdinates: { latitude, longitude },
  age,
  primes,
}) {
  console.log(name, location, "ccheck props");
  // const { name, location, coOrdinates: {latitude, longitude}, age, primes } = props;
  const [productName, setProductName] = useState("");
  const [pricep, productp] = useState(0);
  const [products, setproducts] = useState([]);
  const [editState,setEditState] = useState(false);
  const [selectedProduct,setSelectProduct]=useState(null);

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
      <h1>{name}</h1>
      <h1>{location}</h1>
      <h1>{latitude}' North</h1>
      <h1>{longitude}'East</h1>
      <h1>{age} years</h1>
      <h2>
        Primes: {primes} {primes.length} primes
      </h2>
      <Counter />
      <h1>Cars</h1>
      <ol>
        {products.map((car) => (
          <li key={car.id}>
            <span>{car.name}</span>
            <span>{car.price}</span>
            <button onClick={(f) => handelLetEditProduct(car)}>Edit</button>
            <button onClick={(e) => handelRemoveProduct(car.id)}>X</button>
          </li>
        ))}
      </ol>
      <input
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="number"
        value={pricep}
        onChange={(f) => productp(f.target.value)}
      />
      <button onClick={handleAddUpdateProduct}>{editState?"update":"add"}</button>
      <button onClick={e => setEditState(false)}>cancel</button>
     
    </div>
  );
}
export default App;
