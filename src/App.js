import React from 'react';
import PropTypes from 'prop-types';

function Food({name,picture, rating}) {
  return (
    <div>
      <h3>먹고싶은 ({name})</h3>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt= {name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: '김치',
    image: 'https://image.kmib.co.kr/online_image/2021/0313/611721110015626599_1.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: '삼기업살',
    image: 'https://img7.yna.co.kr/photo/yna/YH/2017/04/23/PYH2017042315750001300_P2.jpg',
    rating: 4.9,
  },
]; //food_i_like

function App() {
  return ( 
  <div>
    <h1>야미</h1>
    {foodILike.map( dish => (<Food key={dish.id} name = {dish.name} picture = {dish.image} rating={dish.rating}/>))}
  </div>
  );
    
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}
export default App;

