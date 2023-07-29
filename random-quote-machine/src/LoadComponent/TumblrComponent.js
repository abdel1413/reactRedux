import { FaQuoteLeft, FaTwitter, FaTumblr } from "react-icons/fa";
import React from "react";
function TumblrComponent(props) {
  return (
    <div>
      <a
        className="a-tumblr"
        href=""
        style={{ backgroundColor: props.backgroundColor }}
      >
        <FaTumblr className="tumblr" />
      </a>
    </div>
  );
}
export default TumblrComponent;
