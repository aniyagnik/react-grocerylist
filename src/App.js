import React from "react";
import "./App.css";
import ViewGroceryList  from "./ViewGroceryList.js";
import Home from "./Home.js";
import Navbar from "./Navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
        <Router>

        
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route  exact path='/'>
                        <Home/>
                    </Route>
                    
                    <Route path='/ViewGroceryList'>
                        <ViewGroceryList/>
                    </Route>
                </Switch>    



                
            </div>
        </Router>    
    );
  }
}

export default App;