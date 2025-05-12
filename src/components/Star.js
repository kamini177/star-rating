import React from 'react';

const Star = ({ color, onClick }) => {
  return <span style={{ color }} onClick={onClick}>★</span>;
};

export default Star;
