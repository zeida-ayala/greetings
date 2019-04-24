import React from 'react'

const Tag = ({tag = "", greeting = ""}) => 
  <span className="tile">
    <span>{greeting} {tag}</span>
  </span>
export default Tag;
