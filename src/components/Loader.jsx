import React from "react";

const Loader = ({ loading }) => {
  return (
    loading && (
      <div className="loading_parent" style={{ display: "block" }}>
        <div className="la-line-scale la-dark la-2x main-loading">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="load-overlay"></div>
      </div>
    )
  );
};

export default Loader;
