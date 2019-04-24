import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MultiLineText extends Component {
  render() {
    const { onChange, names} = this.props
    const namesValue = names.join("\n")
    return ( 
      <textarea 
        name = "text" 
        className = "multiline-text"
        onChange = {event => onChange(event)} defaultValue = {namesValue} > 
      </textarea>
    )
  }
}

MultiLineText.propTypes = {
  onChange: PropTypes.func
}

MultiLineText.defaultProps = {
  onChange: f=>f
}

export default MultiLineText;
