import React, { Component } from 'react'


export class ThirdContainer extends Component {
  render() {
    return (
      <div className = "ThirdContainer">
       <label for="comment" class = "comment">Comments</label>
        <textarea id="comment" name="comment" rows="5" cols="33">
        </textarea>
        <button> Next > </button>
      </div>
    )
  }
}

export default ThirdContainer