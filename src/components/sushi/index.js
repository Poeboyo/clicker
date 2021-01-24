import React, { Component } from "react";
import sushi from "../../assets/images/sushi.png";

class Sushi extends Component {
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
        //Chops the sushi in half
        //Pseudocode for angling css/ loading alt sushi for active state on sushi
      }
      
    }

  render() {
    return (
        <div id="sushi">
            <img src={sushi} alt="sushiimg"></img>
        </div>
    );
  }
}

export default Sushi;