import React, { Component } from "react";
import sushi from "../../assets/images/sushi.png";

class Sushi extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value: null};
  }

  handleChange(e){
    this.setState({ value: e.target.value });
  };

  render() {
    return (
        <div id="sushi">
            <img src={sushi} alt="sushiimg"></img>
        </div>
    );
  }
}

export default Sushi;