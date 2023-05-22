import React, { useState } from 'react'
import Header from '../../../Atoms/Header'
import { STRINGS, VALIDATION_MESSAGES } from '../../../../Shared/Constants'
import ModalComponent from '../../../Cells/Modal'
import ContinueButton from '../../../Atoms/ContinueButton'
import { useDispatch, useSelector } from 'react-redux'
import { addingBio, getUserDetails } from '../../../../Redux/Actions'
import ValidationText from '../../../Atoms/ValidationText'

export default function AddingMiniBio({ show, setShow = () => { } }) {
  const [bio, setBio] = useState("")
  const dispatch = useDispatch()
  const [bioValidationMessage, setBioValidationMessage] = useState("")

  const success=()=>{
    setShow(false)
    dispatch(getUserDetails())
  }
  const handleSubmit = () => {
    if (bio.trim().length < 15 ) {
      setBioValidationMessage(VALIDATION_MESSAGES?.BIO)
    }
    else {
      dispatch(addingBio({ bio: bio },success))
      dispatch(getUserDetails({}))
    
    }
  }
  return (
    <ModalComponent show={show} setShow={setShow}>
      <Header heading={STRINGS?.MINI_BIO_HEADING} />
      <div>

        <textarea className='miniBioInput' value={bio} onChange={(e) => {
          setBio(e.target.value)
          setBioValidationMessage("")
        }} placeholder='example:I love travelling!!' />
      </div>
      <ValidationText message={bioValidationMessage} />

      <ContinueButton ButtonText='save' handleSubmit={handleSubmit} />
    </ModalComponent>
  )
}
