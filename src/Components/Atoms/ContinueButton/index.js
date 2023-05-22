import React from 'react'
import "./styles.css"
export default function ContinueButton({ handleSubmit=()=>{},ButtonText="Continue" }) {
    return (
        <div className='continueButtonDiv'>
            <button className={!ButtonText.includes("Delete")?'continueButton':"dangerButton"} onClick={handleSubmit}>{ButtonText}</button>
        </div>
    )
}
