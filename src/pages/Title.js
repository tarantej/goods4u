import React from 'react'

function Title (props) {
  return (

    <div>
      <h1>{props.heading}</h1>
      <div className='Title-Subtitle'>{props.subheading}</div>
    </div>

  )
}
export default Title
