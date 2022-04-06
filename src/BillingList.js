import React, { useEffect, useState } from "react";
import "./billing.css"; 

const BillingList = () => {
  const [entries, setEntries] = useState([]);
  const [products, setProducts] = useState([]);
  const [date, setDate] = useState(Date());
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [subTotal, setSubtotal] = useState(0);
  const [discountRate, setDiscoutRate] = useState(3);
  const [vatRate, setVatRate] = useState(13);

  useEffect(() => {
    const productsRecorded = JSON.parse(localStorage.getItem("products"));
    if (productsRecorded) {
      setProducts(productsRecorded);
    }
  }, []);

  const handleAddEntry = (e) => {
    const productt = products.find((pr) => pr.id === product);
    setEntries([
      ...entries,
      {
        productId: product,
        productName: productt.name,
        price: productt.price,
        quantity,
      },
    ]);
  };

  console.log(products, product);
  return (
    <div className="body-wapper">
      <div className="entries-container">
        <div className="bill">
          <h1>BILL SYSTEM</h1>
        </div>
        <div className="entries-wapper">
          {entries.map((en) => (
            <div className="entries">
              <div className="productName">
                <h3>Product Name</h3>
                <span>{en.productName}</span>
              </div>
              <div className="quantity">
                <h3>Quantity</h3>
                <span>{+en.quantity}</span>
              </div>
              <div className="price">
                <h3>Price</h3>
                <span>{+en.price}</span>
              </div>
              {/* <div className="totall">
                <span>{+en.price * +en.quantity}</span>
              </div> */}
            </div>
          ))}
        </div>
        <div className="subtotal">
          <p>
            <span>subTotal</span>
            <span>
              {entries.reduce((a, v) => a + +v.price * +v.quantity, 0)}
            </span>
          </p>
        </div>
        <div className="discount">
          <p>
            <span>Discount amount</span>
            <span>
              {(entries.reduce((a, v) => a + +v.price * +v.quantity, 0) *
                discountRate) /
                100}
            </span>
          </p>
        </div>
        <div className="Total">
          <p>
            <span>Total</span>
            <span>
              {entries.reduce((a, v) => a + +v.price * +v.quantity, 0) *
                (1 - discountRate / 100)}
            </span>
          </p>
        </div>
        <div className="vat">
          <p>
            <span>vat amount</span>
            <span>
              {(entries.reduce((a, v) => a + +v.price * +v.quantity, 0) *
                (1 - discountRate / 100) *
                vatRate) /
                100}
            </span>
          </p>
        </div>
        <div className="grand">
          <p>
            <span>Grand Total</span>
            <span>
              {entries.reduce((a, v) => a + +v.price * +v.quantity, 0) *
                (1 - discountRate / 100) *
                (1 + vatRate / 100)}
            </span>
          </p>
        </div>
      
      </div>
                
      <div className="type">
        <div className="select">
          <select value={product} onChange={(e) => setProduct(e.target.value)}>
            {products.map((p) => (
              <option id={p.name} key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <div className="quantity">
          <input
            value={quantity}
            type="number"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="intput-discount">


        <input
          value={discountRate}
          type="number"
          onChange={(e) => setDiscoutRate(e.target.value)}
          />
          </div>
          <div className="input-vat">

        <input
          value={vatRate}
          type="number"
          onChange={(e) => setVatRate(e.target.value)}
          />
          </div>
      </div>
        <div className="add">

        <button onClick={handleAddEntry}>Add Entry</button>
        </div>
    </div>
  );
};

export default BillingList;
