import React from "react";
import axios from "axios";
import Grocery from "./components/Grocery";



class ViewGroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      grocery: [],
      groceryName:"",
      quantity:"",
      deleteGrocery:[]
    }

  }


  
  handleInputChange = event => {
    const {name,value} = event.target
    if(name==='quantity'){
      if(/[a-z]+$/i.test(value)){
        alert('Please input numeric characters only');
        return false;
      }
    }
    if(name==='groceryName'){
      if(/\d/.test(value)){
        alert('Please input alphabets only');
        return false;
      }
    }
    this.setState({
      [name]:value
    });
  };

    onSubmit = (ids) => {
      //e.preventDefault()
        if(/[a-z]+$/i.test(this.state.quantity) || /\d/.test(this.state.groceryName)){  
          this.setState({
            groceryName:"",
            quantity:""
          })
          alert('invalid input...');
          return false;
        }
    
        const grocery={
          groceryName: this.state.groceryName,
          quantity:this.state.quantity,
          id:ids
        }
        this.setState({
          groceryName:"",
          quantity:""
        })
        axios.post( `http://localhost:8080/ViewGroceryList/update`,grocery)
        .then(res=>{
          alert('grocery updated!')
        })
    };
    
  changeState=()=>{
    let array = this.state.grocery;
    console.log('grocery ',this.state.grocery)
    console.log('del ',this.state.deleteGrocery)     
    console.log('ar ',array)
    this.state.deleteGrocery.forEach(s=>{
      let index = array.findIndex(x => x._id ===s);
      console.log('index ',index)
      array.splice(index, 1);
    })
    console.log('ar ',array)

    this.setState({
      deleteGrocery:[],
      grocery:array
    })        
  }
    deleteSelectedGrocery=()=>{
      console.log(Array.isArray(this.state.deleteGrocery) && this.state.deleteGrocery.length>0)
      if(Array.isArray(this.state.deleteGrocery) && this.state.deleteGrocery.length){
        axios.post( `http://localhost:8080/ViewGroceryList/delete`,{deleteGrocery:this.state.deleteGrocery})
        .then(res=>{
          this.changeState()
          alert('selected groceries deleted!')
        })
      }
      else{
        alert('No grocery item selected')
      }
    }
    
  deleteAllGroceries= () => {
      const joined = this.state.grocery.map(e=>e._id);
      console.log("asd ",joined)
    axios.post( `http://localhost:8080/ViewGroceryList/delete`,{deleteGrocery:joined})
        .then(res=>{
          this.changeState()
          this.setState({deleteGrocery:[],grocery:[]})
          alert('all groceries deleted!')
        })
  };

  handleChecks=(event)=>{
    const {value}=event.target
    console.log("S ",value)
    console.log("sadfdas ",this.state.deleteGrocery)
    let ar = [...this.state.deleteGrocery];
    const index = ar.indexOf(value)
    
    if (index !== -1) {
      console.log("exists")
      ar.splice(index, 1);
      this.setState({deleteGrocery: ar});
    
    }
    else{
      console.log('no exist')
      const joined = this.state.deleteGrocery.concat(value);
      this.setState({ deleteGrocery: joined })
    }  
  }

  async componentDidMount() { 
    console.log("SDfsdf")
    axios.post('http://localhost:8080/ViewGroceryList')
      .then(res=>{
        console.log('objs : ',res.data)
        this.setState({
          grocery:res.data
        })
      })
  }  
  render() {
    return (
        <div>
          <div className="grocery-header">Grocery List</div>
            {Array.isArray(this.state.grocery) && this.state.grocery.length ?
              <div>
                <div
                className="input-group-prepend mt-4"
                style={{ justifyContent: "center" }}
                >
                
                <button className="del" onClick={this.deleteSelectedGrocery}>Delete Selected</button>
                 
                <button className="del" onClick={this.deleteAllGroceries}>Delete All</button>
                
                </div>
                <center>
                  {this.state.grocery.map(item => (
                  <Grocery
                      id={item._id}
                      groceryName={item.groceryName}
                      quantity={item.quantity}
                      handleInputChange={this.handleInputChange}
                      onSubmit={this.onSubmit}
                      handleChecks={this.handleChecks}
                      todo={item}
                  />
                  ))}
                </center>
              </div>  
              : 
              <center className="info">
                YOUR GROCERY LIST IS EMPTY
              </center>}
        </div>
    );
  }
}

export default ViewGroceryList;