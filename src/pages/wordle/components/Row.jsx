import React from "react";

export default function Row({ guess }) {
  if (guess) {
    return (
      <div className="gridRow past">
        {guess.map((l, i) => (
          <div key={i} className={l.color}>
            {l.key}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="gridRow">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
