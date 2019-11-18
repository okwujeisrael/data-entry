import React, { Component } from 'react'
import FormSection from './FormSection';
import SecondContainer from './SecondContainer';

export class SecondSection extends Component {
  render() {
    return (
      <div className = "SecondSection">
        <FormSection sectionHeader = "Step 2: More comments"/>
        <SecondContainer />
      </div>
    )
  }
}

export default SecondSection