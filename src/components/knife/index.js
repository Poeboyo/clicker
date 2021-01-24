import React, { Component } from "react";
import knife from "../../assets/images/knife.png"

class Knife extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value: null};
    this.chopped = false;
  }

  handleChange(e){
    this.setState({ value: e.target.value });
  };

  chop(){
    if(this.chopped == false){
      this.chopped.handleChange(true);
      //Chops the knife downwards
      //Pseudocode for angling css for active state on knife
    }
    
  }

  render() {
    return (
        <div id ="knife">
            <img src ={knife} alt="knifeimg"></img>
        </div>
    );
  }
}

export default Knife;