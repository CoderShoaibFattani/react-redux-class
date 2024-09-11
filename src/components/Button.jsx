import React from "react";

const Button = ({ value, handleFunction }) => {
  return (
    <>
      <button
        style={{
          border: "1px solid black",
          backgroundColor: "Blue",
          color: "white",
          padding: "5px",
          margin: "5px",
        }}
        onClick={handleFunction}
      >
        {value}
      </button>
    </>
  );
};

export default Button;
