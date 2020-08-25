import React from 'react';
import Product from './Product';

import { Container, Row } from 'reactstrap';
import axios from 'axios';

class Cart extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        data: []
      };
  }

  componentDidMount() {
    axios.get('https://5f23e5f73b9d350016203bbf.mockapi.io/books')
    .then((response) => {
      this.setState({
        data: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    }) 
  }

  render() {
    const { data } = this.state;

    return (
      <Container>
        <Row>
            {data.map((item, index) => <Product key={index} item={item}/>)}
        </Row>
      </Container>
    );
  }
}

export default Cart;