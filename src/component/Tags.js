import React from 'react'
import Tag from './Tag.js'

const Tags = ({tags}) => 
<div className = "tags-container">
  {tags.map((tag, i) => 
    <Tag key = {"tag" + i} tag = {tag}></Tag>
  )}
</div>
export default Tags;
