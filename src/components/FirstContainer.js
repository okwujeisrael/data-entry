import React, { Component } from 'react';


export class FirstContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true
    }
  }



  collapse = () => {
 
    this.setState({
      isActive: false
    });
  
    console.log("clicked");

  }
 
  

  render() {
      return (
        <div className = "FirstContainer">
        <label for="fname" class ="fname">First Name</label>
         <input type="text" id="fname" name="fname" required />
         <label for="surname" class = "surname">Surname</label>
         <input type="text" id="surname" name="name" required />
         <label for="email" class = "email">Email Address:</label>
         <input type="email" id="email" name="email" required/>
         <button onClick={this.collapse.bind(this), this.state}> Next > </button>
       </div>
     
  
      )
    
    
  }
}

export default FirstContainer