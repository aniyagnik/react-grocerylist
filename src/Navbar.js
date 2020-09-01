import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
        <nav>
            <h4 style={{color:"gold",fontWeight:'bold'}}>ADD-GROCERIES</h4> |
            <h4><Link className='link' style={{color:'white'}} to='/'>Home</Link></h4> |
            <h4><Link className='link' style={{color:'white'}} to='/ViewGroceryList'>View Grocireies</Link></h4>
        </nav>
        
    );
  }
}

export default Navbar;