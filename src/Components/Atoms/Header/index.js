import React from 'react'
import "./styles.css"
export default function Header({heading,color}) {
  return (
    <div className='headingDiv'>
            <h1 className={color!=="white"?'heading':"headingWhite"}>{heading}</h1>
    </div>
  )
}
