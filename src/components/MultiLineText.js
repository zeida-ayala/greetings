import React from 'react'

const MultiLineText = ({onChange = f => f}) => {
  let _valueMultiline

  const onChangeText = e => {
      e.preventDefault()
      onChange(_valueMultiline.value)
  }
  return ( 
    <textarea 
      name = "text" 
      className = "multiline-text"
      ref = {input => _valueMultiline = input}
      onChange = {onChangeText}>
    </textarea>
  )
}
export default MultiLineText;
