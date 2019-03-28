import React, { Component } from 'react';

class Dropdown extends Component {
  render() {
    return (
      <select name="language" id="language" value="3">
        <option>Spanish</option>
        <option>English</option>
      </select>
    )
  }
}

export default Dropdown;
