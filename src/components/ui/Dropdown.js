import React, { Component } from 'react';
import C from '../../constants'

class Dropdown extends Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor="select">Language : </label>
        <select onChange={event => this.props.onSelect(event)}>
          {C.LANGUAGES.map( (language, i) => 
            <option key = {i} value={language.value}> {language.label} </option>
          )}
        </select>
      </div>
    )
  }
};

export default Dropdown;
