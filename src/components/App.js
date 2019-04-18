import React, { Component } from 'react';
import MultiLineText from './MultiLineText.js'
import Dropdown from './Dropdown.js'
import Tags from './Tags.js'
import '../stylesheets/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages:[
        {value: "Hola", label: "Spanish"},
        {value: "Hello", label: "English"},
        {value: "Salut", label: "French"},
        {value: "Ciao", label: "Italian"}
      ],
      mames: "",
      tags: []
    }
    this.addTags = this.addTags.bind(this);
    this.updateNames = this.updateNames.bind(this);
  }

  addTags(e) {
    e.preventDefault();
    if (this.state.names) {
      const tagsGreeting = this.state.names.split("\n")
        .reduce( (accum, elem) => {
          accum.push(e.target.value + " " + elem)
          return accum;
        }, []);
      this.setState({tags: tagsGreeting});
    }
    else {
      this.setState({tags: []});
    }
  }

  updateNames(valueUpdated) {
    this.setState({names: valueUpdated});
  }

  render() {
    return (
      <div className="App">
        <header className ="app-header">
        </header>
        <div className ="app-content"> 
          <div className = "row-container">      
            <Tags tags = {this.state.tags} />
          </div>
          <div className = "row-container">
            <MultiLineText valueText = {this.state.mames}
              onChange = {this.updateNames}  
            />
          </div>
          <div className = "row-container">
            <Dropdown options = {this.state.languages}
              selectedOption = {this.state.selectedOption}
              onChange = {this.addTags}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
