import React, { Component } from 'react'
import FormSection from './FormSection';
import ThirdContainer from './ThirdContainer';

export class ThirdSection extends Component {
  render() {
    return (
      <div className = "ThirdSection">
        <FormSection sectionHeader = "Step 3: Final comments"/>
        <ThirdContainer />
      </div>
    )
  }
}

export default ThirdSection