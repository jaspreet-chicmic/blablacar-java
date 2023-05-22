import React, { useRef, useState } from 'react'
import Header from '../../Atoms/Header'
import CustomInput from '../../Atoms/CustomInput'
import ContinueButton from '../../Atoms/ContinueButton'
import { useNavigate } from 'react-router-dom'
import { STRINGS, VALIDATION_MESSAGES } from '../../../Shared/Constants'
import DateInput from '../../Atoms/DateInput'
import { registerData } from '../../../Redux/Actions'
import { useDispatch } from 'react-redux'
import ValidationText from '../../Atoms/ValidationText'

export default function BirthDateInput() {
  const dispatch=useDispatch()
  const [startDate, setStartDate] = useState(new Date());
  const [validationMessageDOB, setValidationMessageDOB] = useState()
  const navigate = useNavigate()
  const handleSubmit = () => {
    if(!startDate?.toLocaleDateString()){
      setValidationMessageDOB(VALIDATION_MESSAGES?.DATE?.EMPTY)
     }
     else{

       dispatch(registerData?.date(startDate.toLocaleDateString()))
       navigate("/register/gender")
      }
  }
  return (
    <>
      <Header heading={STRINGS?.BIRTHDATE_HEADING} />
      <div className='section'>
        <DateInput startDate={startDate}  setStartDate={setStartDate} setValidationMessageDOB={setValidationMessageDOB}/>
        <ValidationText message={validationMessageDOB} />
      </div>
      <ContinueButton handleSubmit={handleSubmit} />
    </>
  )
}
