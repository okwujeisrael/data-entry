import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormSection extends Component {


  render() {
    return (
      <div className = "FormSection">
        <p>{this.props.sectionHeader}</p>
      </div>
    )
  }
}

FormSection.propTypes = {
  sectionHeader: PropTypes.string.isRequired
}

export default FormSection
