import React from "react";
import { FaTwitter } from "react-icons/fa";

function TwitterComponent(props) {
  return (
    <div>
      <a
        className="a-twitter"
        href=""
        style={{ backgroundColor: props.backgroundColor }}
      >
        <FaTwitter className="twitter" />
      </a>
    </div>
  );
}

export default TwitterComponent;
