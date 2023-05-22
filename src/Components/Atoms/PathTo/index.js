import React from 'react'

import { Images } from '../../../Shared/Images'
import "./styles.css"
export default function PathTo({picNeeded=true,linkText="" ,setShow=()=>{} ,activated}) {
  return (
    <div>

    <div className="publishRideLink"  onClick={()=>{!activated?setShow(true):setShow(false)}}>
      {picNeeded&& <img className="publishRideImg" src={Images?.additionIcon} alt =""></img>}
        <div className="publishRideText">{linkText}</div>
        </div>
    </div>
  )
}
