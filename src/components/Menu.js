import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Cart from './Cart';
import { CartContext } from '../contexts/CartProvider';


class Menu extends React.Component {


  render() {
    return (
      
      <Router>
        <div>
          <Navbar color="light" light expand="sm">
            <NavbarBrand>Cart Project</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem className="ml-4">
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem className="ml-4">
                <CartContext.Consumer>
                  { ({products}) => <Link to="/cart">Cart ({products.length})</Link> }             
                </CartContext.Consumer>
              </NavItem>
            </Nav>
          </Navbar>

          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Menu;