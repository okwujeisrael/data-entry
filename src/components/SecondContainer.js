import React, { Component } from 'react'


export class SecondContainer extends Component {
 

  render() {
    return (
      <div className = "SecondContainer">
        <label for="phone" class ="phone">Telephone Number</label>
        <input type="number" id="phone" name="phone" required />
        <label for="gender" class = "surname">Gender</label>
        <select class = "dropdown" required>
          <option value="male">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label for="dob" class = "dob">Date of birth</label>
        <input type="day" id="day" name="day" required/>
        <input type="month" id="month" name="month" required/>
        <input type="year" id="year" name="year" required/>

        <button> Next > </button>
      </div>
    )
  }
}

export default SecondContainer