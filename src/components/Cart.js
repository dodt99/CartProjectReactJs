import React from 'react';
import Product from './Product';

import { Container, Row } from 'reactstrap';
// import axios from 'axios';

class Cart extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        data: [{"id":"1","avatar":"https://salt.tikicdn.com/cache/280x280/ts/product/a6/39/ca/7eca66c10e5f99f14325733bf53aa425.jpg","name":"Bố Già","author":"Mario Puzo","priceRegular":110,"saleOff":0.35},{"id":"2","avatar":"https://salt.tikicdn.com/cache/280x280/ts/product/4a/c0/ee/c73cca3fbd5f8c9aefe98102acd633b5.jpg","name":"Không Gia Đình","author":"Hector Malot","priceRegular":132,"saleOff":0.36},{"id":"3","avatar":"https://salt.tikicdn.com/cache/280x280/media/catalog/product/2/d/2d-thep-da-toi-the-day.jpg","name":"Thép đã tôi thế đấy","author":"Nikolai A.Ostrovsky","priceRegular":129,"saleOff":0.1},{"id":"4","avatar":"https://salt.tikicdn.com/cache/280x280/ts/product/47/44/d3/5432cf841314cf28c9d5cde258955cb5.jpg","name":"Tây Du Ký","author":"Ngô Thừa Ân","priceRegular":420,"saleOff":0.36},{"id":"5","avatar":"https://salt.tikicdn.com/cache/280x280/media/catalog/product/g/a/gatsby_vi_dai_in-01_2.jpg","name":"Gastby Vĩ Đại","author":"F.Scott Fitzgerald","priceRegular":135,"saleOff":0.15},{"id":"6","avatar":"https://salt.tikicdn.com/cache/280x280/ts/product/33/d8/12/97529474dc3291b4c5cbb950ddd0230e.jpg","name":"Tiếng gọi nơi hoang dã","author":"Jack London","priceRegular":72,"saleOff":0.31},{"id":"7","avatar":"https://salt.tikicdn.com/cache/280x280/ts/product/d0/04/10/c89647f01c132699ff6829a586831254.jpg","name":"Nghìn lẻ một đêm","author":"Antoine Galland","priceRegular":235,"saleOff":0.17},{"id":"8","avatar":"https://salt.tikicdn.com/cache/280x280/ts/product/aa/ce/e5/38cde4cbfa65e85905301a1f759d5e4d.jpg","name":"Muôn kiếp nhân sinh","author":"Nguyên Phong","priceRegular":168,"saleOff":0.3},{"id":"9","avatar":"https://salt.tikicdn.com/cache/280x280/ts/product/95/c5/71/f260011660001af960c42d7d2f1c5dc1.jpg","name":"Đừng chạy theo số đông","author":"Kiên Trần","priceRegular":200,"saleOff":0.35},{"id":"10","avatar":"https://salt.tikicdn.com/cache/280x280/ts/product/0b/e4/9d/9819a2afb854e301ebaf93e8e4a8a9d3.jpg","name":"Tôi từng nghĩ mọi thứ sẽ ổn khi trở thành người lớn","author":"Kim Haenam","priceRegular":96,"saleOff":0.2},{"id":"11","avatar":"https://salt.tikicdn.com/cache/280x280/ts/product/f8/34/c8/5fbf2a6f9d07b76d98e2fff2b29b0d3c.jpg","name":"Tuổi trẻ đáng giá bao nhiêu","author":"Rosie Nguyễn","priceRegular":80,"saleOff":0.35},{"id":"12","avatar":"https://salt.tikicdn.com/cache/280x280/ts/product/25/d6/2c/f88080bba78a779fb78e1b76b73a9813.jpg","name":"Sống thực tế giữa đời thực dụng","author":"Mễ Mông","priceRegular":98,"saleOff":0.5},{"id":"13","avatar":"https://salt.tikicdn.com/cache/280x280/media/catalog/product/n/x/nxbtre_full_06372017_103735.u547.d20170117.t105220.139884.jpg","name":"Từ tốt đến vĩ đại","author":"Jim Collins","priceRegular":115,"saleOff":0.33},{"id":"14","avatar":"https://salt.tikicdn.com/cache/280x280/ts/product/8c/c5/bd/e7b36f74cc3c42c1fef5b6770e0e6d83.jpg","name":"Tôi tài giỏi - Bạn cũng thế","author":"Adam Khoo","priceRegular":118,"saleOff":0.36},{"id":"15","avatar":"https://salt.tikicdn.com/cache/280x280/ts/product/46/9d/88/6560a409f40c37ac63d4e279bbea34b7.jpg","name":"Hành trình về phương đông","author":"Nguyên Phong","priceRegular":88,"saleOff":0.35},{"id":"16","avatar":"https://salt.tikicdn.com/cache/280x280/media/catalog/product/n/h/nhalanhdao.u2769.d20170307.t090846.484463.jpg","name":"nhà lãnh đạo không chức danh","author":"Robin Sharma","priceRegular":80,"saleOff":0.33},{"id":"17","avatar":"https://salt.tikicdn.com/cache/280x280/ts/product/0a/f6/38/bc10734989977da424642a1c4750eee2.jpg","name":"đàn ông sao hỏa đàn bà sao kim","author":"John Gray","priceRegular":188,"saleOff":0.4},{"id":"18","avatar":"https://salt.tikicdn.com/cache/280x280/media/catalog/product/i/m/img894.u3059.d20170616.t102330.519090.jpg","name":"5 centimet trên giây","author":"Shinkai Makoto","priceRegular":50,"saleOff":0.4},{"id":"19","avatar":"https://salt.tikicdn.com/cache/280x280/ts/product/6b/f8/b9/fd109946cf210b73731f047822fed2b8.jpg","name":"Ác Ý","author":"Keigo Higashino","priceRegular":39,"saleOff":0.4},{"id":"20","avatar":"https://salt.tikicdn.com/cache/280x280/ts/product/38/21/47/eb00fd978105557112ea749271d93cd8.jpg","name":"Ba người thầy vĩ đại","author":"Robin Sharma","priceRegular":95,"saleOff":0.43},{"id":"21","avatar":"https://salt.tikicdn.com/cache/280x280/ts/product/33/d8/12/97529474dc3291b4c5cbb950ddd0230e.jpg","name":"Tiếng gọi nơi hoang dã","author":"Jack London","priceRegular":72,"saleOff":0.31},{"id":"22","avatar":"https://salt.tikicdn.com/cache/280x280/ts/product/d0/04/10/c89647f01c132699ff6829a586831254.jpg","name":"Nghìn lẻ một đêm","author":"Antoine Galland","priceRegular":235,"saleOff":0.17},{"id":"23","avatar":"https://salt.tikicdn.com/cache/280x280/ts/product/aa/ce/e5/38cde4cbfa65e85905301a1f759d5e4d.jpg","name":"Muôn kiếp nhân sinh","author":"Nguyên Phong","priceRegular":168,"saleOff":0.3},{"id":"24","avatar":"https://salt.tikicdn.com/cache/280x280/ts/product/95/c5/71/f260011660001af960c42d7d2f1c5dc1.jpg","name":"Đừng chạy theo số đông","author":"Kiên Trần","priceRegular":200,"saleOff":0.35},{"id":"25","avatar":"https://salt.tikicdn.com/cache/280x280/ts/product/0b/e4/9d/9819a2afb854e301ebaf93e8e4a8a9d3.jpg","name":"Tôi từng nghĩ mọi thứ sẽ ổn khi trở thành người lớn","author":"Kim Haenam","priceRegular":96,"saleOff":0.2},{"id":"26","avatar":"https://salt.tikicdn.com/cache/280x280/ts/product/f8/34/c8/5fbf2a6f9d07b76d98e2fff2b29b0d3c.jpg","name":"Tuổi trẻ đáng giá bao nhiêu","author":"Rosie Nguyễn","priceRegular":80,"saleOff":0.35},{"id":"27","avatar":"https://salt.tikicdn.com/cache/280x280/ts/product/a6/39/ca/7eca66c10e5f99f14325733bf53aa425.jpg","name":"Bố Già","author":"Mario Puzo","priceRegular":110,"saleOff":0.35},{"id":"28","avatar":"https://salt.tikicdn.com/cache/280x280/ts/product/4a/c0/ee/c73cca3fbd5f8c9aefe98102acd633b5.jpg","name":"Không Gia Đình","author":"Hector Malot","priceRegular":132,"saleOff":0.36},{"id":"29","avatar":"https://salt.tikicdn.com/cache/280x280/media/catalog/product/2/d/2d-thep-da-toi-the-day.jpg","name":"Thép đã tôi thế đấy","author":"Nikolai A.Ostrovsky","priceRegular":129,"saleOff":0.1},{"id":"30","avatar":"https://salt.tikicdn.com/cache/280x280/ts/product/47/44/d3/5432cf841314cf28c9d5cde258955cb5.jpg","name":"Tây Du Ký","author":"Ngô Thừa Ân","priceRegular":420,"saleOff":0.36},{"id":"31","avatar":"https://salt.tikicdn.com/cache/280x280/media/catalog/product/g/a/gatsby_vi_dai_in-01_2.jpg","name":"Gastby Vĩ Đại","author":"F.Scott Fitzgerald","priceRegular":135,"saleOff":0.15}]
      };
  }

  // componentDidMount() {
  //   axios.get('https://5f23e5f73b9d350016203bbf.mockapi.io/books')
  //   .then(function (response) {
  //     this.setState({
  //       data: response.data
  //     });
  //     // console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   }) 
  // }

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