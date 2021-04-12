import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
    {
        id: 1,
        name: "coffee",
        rating: 5
    },
    {
        id: 2,
        name: "water",
        rating: 3
    },
    {
        id: 3,
        name: "sushi",
        rating: 4
    }
];

function Food({name, rating}) { // props.name
    return (
        <div>
            <h5>I like {name}</h5>
            <span>{rating}/5</span>
        </div>
    );
}
// validation props
Food.propTypes = {
    id:PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}
function App() {
  return (
      <div className="App">
          {foodILike.map(food => <Food  id={food.id} name={food.name} rating={food.rating}/>)}
      </div>
  );
}

export default App;
