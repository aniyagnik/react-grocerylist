import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <nav>
            <h4>Site name</h4> |
            <h4><Link style={{color:'white'}} to='/'>Home</Link></h4> |
            <h4><Link  style={{color:'white'}} to='/ViewGroceryList'>View Grocireies</Link></h4>
        </nav>
        
    );
  }
}

export default Navbar;