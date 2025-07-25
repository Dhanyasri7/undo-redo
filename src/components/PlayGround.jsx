import React, { useState } from 'react';
import Button from './Button';
import Canvas from './Canvas';

const PlayGround = () => {
    const [points, setPoints] = useState([]);
    const [redoStack, setRedoStack] = useState([]);

    const onPointAdd = (e) => {
       const newPoint = {
        x: e.clientX,
        y: e.clientY,
       };
       setPoints([...points, newPoint]);
    };

    const onUndo = () => {
        const lastPoint = points[points.length - 1];
        setRedoStack([...redoStack, lastPoint]);
        setPoints([...points.slice(0, points.length - 1)]);
    };

    const onRedo = () => {
        const lastUndone = redoStack[redoStack.length - 1];
        setPoints([...points, lastUndone]);
        setRedoStack([...redoStack.slice(0, redoStack.length - 1)]);
    };

  return ( 
  <div>
    <div className = "btn-group">
        <Button onClick={onUndo} disabled={points.length === 0}>Undo</Button>
        <Button onClick={onRedo} disabled={redoStack.length === 0}>Redo</Button>
    </div>
    <div className="canvas-container">
        <Canvas points={points} onPointAdd={onPointAdd}/>
    </div>
  </div>
  );
};

export default PlayGround;