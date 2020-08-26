import React, { Component } from 'react';

export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }

    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    let data = JSON.parse(localStorage.getItem('products'));
    this.setState({
      products: (data != null) ? data : []
    });
  }

  addToCart(product) {
    this.setState({
      products: this.state.products.concat(product)
    })
    localStorage.setItem('products', JSON.stringify(this.state.products));
    console.log(this.state.products);
  }

  render() {
    return (
      <CartContext.Provider value={{
        products: this.state.products,
        addToCart: this.addToCart
      }}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
