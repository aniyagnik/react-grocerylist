import React from "react";

class ViewGroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      groceryName: "",
      quantity:null
    }
  }

  handleInputChange = event => {
    const [name,value] = event.target
    this.setState({
      [name]:value
    });
  };

  handleOnClick = () => {
    const grocery={
        name: this.state.groceryName,
        quantity:this.state.quantity
      }
  };
  

  render() {
    return (
        <div>
          <div className="add-todo-header">ADD GROCIRIES</div>
          <div
                className="input-group-prepend mt-4"
                style={{ justifyContent: "center" }}
                >
                <input
                    type="text"
                    class="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    style={{ width: "60%" }}
                    name='groceryName'
                    placeholder='enter grocery name'
                    value={this.state.groceryName}
                    onChange={this.handleInputChange}
                />

                <input
                    type="text"
                    class="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    style={{ width: "20%" }}
                    name='quantity'
                    placeholder='value in kg'
                    value={this.state.quantity}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleOnClick}>Add Grocery</button>
          </div>
        </div>
    );
  }
}

export default ViewGroceryList;