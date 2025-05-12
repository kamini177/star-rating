import React, { useState } from 'react';
import Star from './components/Star';
import ColorList from './components/ColorList';
import './App.css';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const createArray = (num) => {
    return Array(num).fill('★');
  };

  const stars = createArray(7);

   return (
    <div>
      {stars.map((star, index) => (
        <Star
          key={index}
          color={index < rating ? 'red' : 'gray'}
          onClick={() => setRating(index + 1)}
        />
      ))}
    </div>
  );
};

function App() {
   const [color, setColor] = useState('red');
  const colors = ['red', 'green', 'blue', 'yellow'];
  return (
    <div className="App">

       <h1>Selected Color: {color}</h1>
      <ColorList colors={colors} setColor={setColor} />
      
      <h1>Star Rating</h1>
      <StarRating />
    </div>
  );
}

export default App;
