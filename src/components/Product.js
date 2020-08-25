import React from 'react';
import { Col } from 'reactstrap';
import './Product.css';

export default function Product(props) {
  
    const item = props.item;
    console.log(item);

    return (
      <Col md="4" className="my-1">
        <div className="product">
          <a href="#"><img className="image" src= {item.avatar} alt=""/></a>
          <h4 className="name">{item.name}</h4>
          <p className="author">{item.author}</p>
          <div className="price-sale">
              <span className="price-final">{((Math.ceil(item.priceRegular * (1 - item.saleOff) * 1000)) / 1000).toFixed(3)}đ</span>
              <span className="saleOff">-{item.saleOff * 100}%</span>
              <p className="priceRegular">{item.priceRegular}.000đ</p>
          </div>
          <div href="#" className="btn btn-info" >Add To Cart</div>
        </div>
      </Col>
    ); 
}

