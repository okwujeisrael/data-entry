import React, { Component } from 'react'
import FormSection from './FormSection';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';


export class Wrapper extends Component {
  render() {
    return (
      <div className = "Container">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </div>
    )
  }
}

export default Wrapper
