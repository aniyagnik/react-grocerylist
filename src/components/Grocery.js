
import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Skeleton , { SkeletonTheme }from 'react-loading-skeleton';
class Grocery extends React.Component {
  state = {
    open: false,
    groceryName:"",
    quantity:""
  };

  

  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    return (
      <SkeletonTheme color="#202020" highlightColor="#444">
      <div className='gBox' key={this.props.id}>
        <input type='checkbox'value={this.props.id} onChange={this.props.handleChecks}/>
        <span style={{margin:' 0 3vw'}}>{this.props.groceryName || <Skeleton  circle={true} height={50} width={50}/>}</span>
        <span style={{margin:' 0 3vw'}}>{this.props.quantity|| <Skeleton  circle={true} height={50} width={50}/>} Kg</span>

        <button onClick={this.onOpenModal} className='edit'>edit</button>
        
        <Modal open={open} onClose={this.onCloseModal}>
            <h2>EDIT YOUR GROCERY HERE</h2>
            {/* <Form
            groceryName={this.props.groceryName}
            quantity={this.props.quantity}
            handleInputChange={this.handleInputChange}
            onSubmit={this.onSubmit}
            submitStatement={"Update Item"}
          /> */}
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
                    onChange={this.props.handleInputChange}
                />
                <button className='confirm' onClick={() => this.props.onSubmit(this.props.id)}>Update</button>
          </div>
        </Modal>
        
      </div>
      </SkeletonTheme>
    );
  }
}

export default Grocery;