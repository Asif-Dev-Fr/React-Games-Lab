import React, { memo } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { puzzlePieceStyles } from './utils';

const Tiles = memo((props) => {
  const { position, onDropPiece } = props;

  const [, dragEl] = useDrag({
    type: "TILES",
    item: { position },
  });

  const [{ isOver }, dropRef] = useDrop({
    accept: 'TILES',
    drop: (props) => {
      onDropPiece(
        props.position, // source position
        position // drop position
      );
    },
    collect: (monitor) => {
      return {
        isOver: monitor.isOver()
      }
    }
  });

  return (
    <div className="puzzle-piece" ref={dropRef}>
      <div 
        ref={dragEl} 
        style={puzzlePieceStyles({ ...props, isOver })}>
      </div>
    </div>
  );
});

export default Tiles;