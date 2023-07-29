import React from "react";
function ButtonComponent(props) {
  return (
    <div>
      <button
        style={{ background: props.backgroundColor }}
        className="new-quote-btn"
        onClick={props.handleClick}
      >
        {" "}
        New Quote
      </button>
    </div>
  );
}

export default ButtonComponent;
