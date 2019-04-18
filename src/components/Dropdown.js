import React, { Component } from 'react';
class Dropdown extends Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor="select">Language : </label>
        <select value={this.props.selectedOption} onChange={this.props.onChange}>
          {this.props.options.map( (optionSelect, i) => 
            <option key = {i} value={optionSelect.value}> {optionSelect.label} </option>
          )}
        </select>
      </div>
    )
  }
};

export default Dropdown;
