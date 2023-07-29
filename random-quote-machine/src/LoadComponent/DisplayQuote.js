import React from "react";
import "./quotes.css";
import data from "../Quotes/QuotesArrayObject";
import randomColors from "../RandomColors";

import { FaQuoteLeft, FaTwitter, FaTumblr } from "react-icons/fa";
import ButtonComponent from "./ButtonComponent";
import TwitterComponent from "./TwitterComponent";
import TumblrComponent from "./TumblrComponent";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.styles = null;
    this.state = {
      quote: "",
      author: "",
      backgroundColor: "",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let randomQuote = Math.floor(Math.random() * data.length);
    let bg = Math.floor(Math.random() * randomColors.length);
    let body = document.getElementsByTagName("body")[0];
    // console.log("styles", this.styles.current);

    this.setState({
      quote: data[randomQuote].quote,
      author: data[randomQuote].author,
      backgroundColor: randomColors[bg].backgroundColor,
    });

    body.style.backgroundColor = randomColors[bg].backgroundColor;

    body.style.color = randomColors[bg].color;
  }

  render() {
    window.onload = this.handleClick;

    return (
      <div>
        <div className="quote-box">
          <div className="text-box">
            <div className="text">
              <FaQuoteLeft className="quote-left" />
              <span>{this.state.quote}</span>
            </div>
            <div className="authors">
              - <span>{this.state.author}</span>
            </div>
          </div>

          <div className="buttons">
            <TwitterComponent backgroundColor={this.state.backgroundColor} />
            <TumblrComponent backgroundColor={this.state.backgroundColor} />
            <ButtonComponent
              backgroundColor={this.state.backgroundColor}
              handleClick={this.handleClick}
            />
          </div>
        </div>
        <footer>By Aboulaye Tchakoura</footer>
      </div>
    );
  }
}
// window.onload = this.handleClick;
export default Display;
