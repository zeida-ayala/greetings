import React from 'react';
import {UpdateNames, UpdateLanguage, UpdateTags} from './containers'
import '../stylesheets/App.css';

const App = () => 
  <div className="App">
    <header className ="app-header">
    </header>
    <div className ="app-content"> 
      <div className = "row-container">      
        <UpdateTags />
      </div>
      <div className = "row-container">
        <UpdateNames />
      </div>
      <div className = "row-container">
        <UpdateLanguage />
      </div>
    </div>
  </div>
export default App;
