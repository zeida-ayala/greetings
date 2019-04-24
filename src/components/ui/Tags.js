import React from 'react'
import PropTypes from 'prop-types'
import Tag from './Tag.js'

const Tags = ({names = [], greeting = ""}) => 
<div className = "tags-container">
  {names.map((name, i) => 
    <Tag key = {"tag" + i} tag = {name} greeting = {greeting}></Tag>
  )}
</div>

Tags.propTypes = {
  names: PropTypes.array,
  greeting: PropTypes.string
}

export default Tags;
