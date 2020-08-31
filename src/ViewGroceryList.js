import React from "react";
import Grocery from "./components/Grocery";

class ViewGroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      grocery: [
        {
          id: 0,
          name: "item1",
          isDone: false
        }
      ]
    }

  }
  handleOnClick = () => {
    this.setState({
      grocery: [
        ...this.state.grocery,
        {
          id: this.state.grocery.length + 1,
          name: this.state.inputValue,
          isDone: false
        }
      ]
    });
  };

  handleToggle = todo => {
    let grocery = this.state.grocery.map(item => {
      if (item.id === todo.id) {
        console.log("in");
        return {
          id: item.id,
          name: item.name,
          isDone: !item.isDone
        };
      } else {
        console.log("out");
        return item;
      }
    });
    this.setState({
      grocery
    });
  };
   
    deleteItem = (todo) => {
    let grocery = this.state.grocery.filter(item =>todo.id!==item.id)
       this.setState({
      grocery
    });
    
  };

  
  deleteStriked = () => {
    let grocery = this.state.grocery.filter(item =>item.isDone===false)
       this.setState({
      grocery
    });
  };

  
  deleteAll= () => {
    let grocery = this.state.grocery.filter(item =>item.id=== item.id+1)
       this.setState({
      grocery
    });
  };

  
  render() {
    return (
        <div>
          <div className="add-todo-header">Todo List</div>
                <div
                className="input-group-prepend mt-4"
                style={{ justifyContent: "center" }}
                >
                
                <button onClick={this.deleteStriked}>Delete Striked</button>
                 |||||||| 
                <button onClick={this.deleteAll}>Delete All</button>
                
                </div>
                {this.state.grocery.map(item => (
                <Grocery
                    title={item.name}
                    deleteItem={this.deleteItem}
                    handleClick={this.handleToggle}
                    todo={item}
                />
                ))}

        </div>
    );
  }
}

export default ViewGroceryList;