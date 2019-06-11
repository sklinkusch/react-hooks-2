import React, { useState } from 'react'

const ProductListHook = () => {
  const [products] = useState(
    [
      {
        id: 1,
        name: "Doom"
      },
      {
        id: 2,
        name: "Quake"
      }
    ]
  );
  const [cart, setCart] = useState([])
  const addItem = (item) => {
    this.setCart((prevCart) => { cart: [...prevCart, item] })
  }
  return (<div>
    <h2>Cart</h2>
    {cart.map((item, index) => <div key={index}>{item.name}</div>)}
    <h2>Products</h2>
    {products.map(product => <div key={product.id} onClick={addItem(product)}>{product.name}</div>)
    }
  </div >);
}

export default ProductListHook;