import React, { useState } from 'react'
import Header from '../../../Atoms/Header'
import ContinueButton from '../../../Atoms/ContinueButton'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteAccount } from '../../../../Redux/Actions'
import ValidationText from '../../../Atoms/ValidationText'
import { Images } from '../../../../Shared/Images'

export default function DeleteAccount() {
    const [errorMessage,setErrorMessage]=useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const successDeleteAccount = () => {
        navigate("/")
        localStorage.clear("token")
        localStorage.clear("CurrentUser")
    }
    const failedDeleteAccount=(res)=>{
        setErrorMessage(res)
    }
    const handleSubmit = () => {
    dispatch(deleteAccount(successDeleteAccount,failedDeleteAccount))
    }
    const handleCancle=()=>{
        navigate("/dashboard/profile/menu")
    }
    return (
        <div className='deleteAccount'>
            <Header heading={"Sure to delete your account"} color={"white"}/>
            <ValidationText message={errorMessage}/>
            <div className='section-content'>

            <div className='deleteAccountButtons'>

            <img src={Images?.additionIcon} alt="" onClick={handleCancle} className='cancleDelete'></img>
            <ContinueButton ButtonText={"Delete Account"} handleSubmit={handleSubmit} />
            </div>
            </div>
        </div>
    )
}
