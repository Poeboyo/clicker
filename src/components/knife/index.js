import React, { Component } from "react";
import knife from "../../assets/images/knife.png"

class Knife extends Component {
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
        <div id ="knife">
            <img src ={knife} alt="knifeimg"></img>
        </div>
    );
  }
}

export default Knife;