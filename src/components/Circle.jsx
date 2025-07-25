import React from 'react';

const Circle = ({point}) => {
  return <div className="circle" style={{left : point.x, top : point.y  }} ></div>;
  
};

export default Circle;