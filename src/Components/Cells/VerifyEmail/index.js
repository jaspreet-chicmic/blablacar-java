import React from 'react'
import ModalComponent from '../Modal'
import ContinueButton from '../../Atoms/ContinueButton'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getUserDetails, sendEmailVerificationstatus } from '../../../Redux/Actions'

export default function VerifyEmail() {
  const userData=JSON.parse(localStorage.getItem("CurrentUser"))
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {id}=useParams()
 const successVerified=()=>{
navigate("/dashboard/profile/menu")
dispatch(getUserDetails())
  }
  const handleSubmit=()=>{
  dispatch(sendEmailVerificationstatus({email:userData?.email},id,successVerified))
  }
  return (
    <ModalComponent show={true}>
        <div className='Container'>
         <ContinueButton ButtonText="Verify" handleSubmit={handleSubmit}/>

        </div>
    </ModalComponent>
  )
}
