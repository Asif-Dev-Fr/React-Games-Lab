export const puzzleWrapperStyles = (props) => ({
  display: "flex",
  flexWrap: "wrap",
  padding: 0,
  width: `${props.width}px`,
  height: `${props.height}px`,
  marginTop: "20px"
});

export const puzzlePieceStyles = (props) => ({
  width: `${props.width / props.pieces}px`,
  height: `${props.height / props.pieces}px`,
  margin: "0 -1px -1px",
  border: "1px solid #000",
  backgroundImage: `url(${props.image})`,
  backgroundSize: `${props.width}px ${props.height}px`,
  backgroundPosition: `-${props.x}px -${props.y}px`,
  opacity: `${props.isOver ? "0.2" : "1"}`,
  backgroundRepeat: "no-repeat",
  cursor: "move",
});

export const shuffle = (a) => {
  const b = a.slice();

  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }

  return b;
};

export const isEqual = (a, b) => {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
};
