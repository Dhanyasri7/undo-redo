import React from 'react';
import Circle from './Circle';
const Canvas = ({points, onPointAdd}) => {
  return <div className="canvas" onClick={onPointAdd}>
    {points.map((point) => (
        <Circle point={point} />
    ))}
  </div>
};

export default Canvas;