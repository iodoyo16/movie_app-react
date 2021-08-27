import React from "react";
import PropTypes from "prop-types";
// component is function that returns html
function Food({fav, picture, rating}){ //property object를 열어 fav 를 get
  return <div>
    <h1>I like {fav}</h1>
    <img src={picture} alt={fav}/>
    <h1>rating : {rating} </h1>
  </div>
}

Food.propTypes={  // property 의 type check를 위한 description
  fav: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired, // isRequired 필수
  rating: PropTypes.number
}
function renderFood(food){
  return <Food key={food.id} fav={food.name} picture={food.image} rating={food.rating} />;
}



function App() {
  return (
    <div className="App">
    {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
