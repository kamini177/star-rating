import React from 'react';

const ColorList = ({ colors, setColor }) => {
  return (
    <div>
      {colors.map((color, index) => (
        <button key={index} onClick={() => setColor(color)}>
          {color}
        </button>
      ))}
    </div>
  );
};

export default ColorList;
