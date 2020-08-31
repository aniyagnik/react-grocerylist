import React from "react";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      groceryName: "",
      quantity:0
    }
  }

  handleInputChange = event => {
    const {name,value} = event.target
    this.setState({
      [name]:value
    });
  };

  onSubmit = (e) => {
    e.preventDefault()
    const grocery={
        groceryName: this.state.groceryName,
        quantity:this.state.quantity
      }
      axios.post('http://localhost:8080/add',grocery)
      .then(res=>{
        console.log('obj added ',res.data)
      })
  };
  

  render() {
    return (
        <div>
          <div className="grocery-header">ADD GROCIRIES</div>
          <div
                className="input-group-prepend mt-4"
                style={{ justifyContent: "center" }}
                >
                <input
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    style={{ width: "50%" }}
                    name='groceryName'
                    placeholder='enter grocery name'
                    value={this.state.groceryName}
                    onChange={this.handleInputChange}
                />
                &nbsp;
                <input
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    style={{ width: "20%" }}
                    name='quantity'
                    placeholder='value in kg'
                    value={this.state.quantity}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.onSubmit}>Add Grocery</button>
          </div>
        </div>
    );
  }
}

export default Home;