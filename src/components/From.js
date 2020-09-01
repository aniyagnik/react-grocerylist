import React from "react";

class Form extends React.Component{
    render(){
        return(
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
                    value={this.props.groceryName}
                    onChange={this.props.handleInputChange}
                />
                
                <input
                    type="text"
                    className="form-control"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    style={{ width: "20%" }}
                    name='quantity'
                    placeholder='value in kg'
                    value={this.props.quantity}
                    onChange={this.props.handleInputChange}
                />
                <button className='confirm' onClick={this.props.onSubmit}>{this.props.submitStatement}</button>
          </div>
        )
    }
}

export default Form