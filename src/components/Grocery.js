// import {Component} from 'react'

// class grocery extends Component{
    
// } 
import React from "react";

class Grocery extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     console.log(props);
  //     this.state = {
  //         name:this.props.title
  //     }
  //   }
  render() {
    return (
      <div>
        <li
          className={this.props.todo.isDone ? "striked" : ""}
          onClick={todo => this.props.handleClick(this.props.todo)}   //try removing todo=>
        >
          {this.props.title}
        </li>
        
        <button type='button' onClick={todo=>this.props.deleteItem(this.props.todo)}>Delete</button>
      </div>
    );
  }
}

export default Grocery;