import React, { Component } from 'react'
import FormSection from './FormSection';
import FirstContainer from './FirstContainer';

export class FirstSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }


  render() {
    return (
      <div className = "FirstSection">
        <FormSection sectionHeader = "Step 1: Your details"/>
        <FirstContainer />
      </div>
    )
      
   
   
    
  }
}

export default FirstSection

