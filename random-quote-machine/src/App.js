import React from "react";
import "./App.css";
import Display from "./LoadComponent/DisplayQuote";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Random Quote Matchine</h1>
        </header>
        <Display />
      </div>
    );
  }
}
export default App;
