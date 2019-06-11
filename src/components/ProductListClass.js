import React, { Component } from 'react'

export default class ProductListClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [
        {
          id: 0,
          name: "Doom"
        },
        {
          id: 1,
          name: "Quake"
        }
      ],
      cart: []
    }
  }
  addItem = (item) => {
    this.setState((prevState) => ({ cart: [...prevState.cart, item] }))
  }
  render() {
    return (
      <div>
        <h2>Cart Items</h2>
        <ul>
          {this.state.cart.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
        <h2>Product List</h2>
        <ul>
          {this.state.products.map(item => (
            <li key={item.id} onClick={() => this.addItem(item)}>{item.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}
