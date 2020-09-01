import React from "react";
import axios from "axios";
import Form from './components/From'
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      groceryName: "",
      quantity:""
    }
  }

  handleInputChange = event => {
    const {name,value} = event.target
    if(name=='quantity'){
      const letters = /^[A-Za-z]+$/;
      if(/[a-z]+$/i.test(value)){
        alert('Please input numeric characters only');
        return false;
      }
    }
    if(name==='groceryName'){
      const numbers = /^[0-9]+$/;
      if(/\d/.test(value)){
        alert('Please input alphabets only');
        return false;
      }
    }
    this.setState({
      [name]:value
    });
  };

  onSubmit = (e) => {
    e.preventDefault()
    const numbers = /^[0-9]+$/;
    const letters = /^[A-Za-z]+$/;
    if(!this.state.groceryName.match(letters) && !this.state.quantity.match(numbers)){
      alert('invalid inputs');
      this.setState({
        groceryName:"",
        quantity:""
      })
      return false;
    }
    const grocery={
        groceryName: this.state.groceryName,
        quantity:this.state.quantity
      }
      this.setState({
        groceryName:"",
        quantity:""
      })
      axios.post('http://localhost:8080/add',grocery)
      .then(res=>{
        alert('grocery added!')
      })
  };
  

  render() {
    return (
        <div>
          <div className="grocery-header">ADD GROCIRIES</div>
          <Form
            groceryName={this.state.groceryName}
            quantity={this.state.quantity}
            handleInputChange={this.handleInputChange}
            onSubmit={this.onSubmit}
            submitStatement={"Save Item"}
          />
        </div>
    );
  }
}

export default Home;