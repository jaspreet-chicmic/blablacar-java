import React, { useState } from 'react'
import ModalComponent from '../../../Cells/Modal'
import Header from '../../../Atoms/Header'
import "../styles.css"
import CustomInput from '../../../Atoms/CustomInput'
import ContinueButton from '../../../Atoms/ContinueButton'
import { VALIDATION_MESSAGES } from '../../../../Shared/Constants'
import { isValidEmail, isValidName } from '../../../../Shared/Utilities'
import DateInput from '../../../Atoms/DateInput'
import { useDispatch } from 'react-redux'
import { updateProfile } from '../../../../Redux/Actions'
import ValidationText from '../../../Atoms/ValidationText'
import { useNavigate } from 'react-router-dom'
export default function EditPersonalDetails({ show, setShow = () => { } }) {
    const userData = JSON.parse(localStorage.getItem("CurrentUser"))
    const [firstName, setFirstName] = useState(userData?.first_name || "")
    const [lastName, setLastName] = useState(userData?.last_name || "")
    const [dob, setDob] = useState(new Date(userData?.dob || "0"))
    const [gender, SetGender] = useState(userData?.title || "")
    const [email, setEmail] = useState(userData?.email || "")
    const [emailValidationMessage, setEmailValidationMessage] = useState("")
    const [validationMessageFirstName, setValidationMessageFirstName] = useState()
    const [validationMessageLastName, setValidationMessageLastName] = useState()
    const [validationMessageDOB, setValidationMessageDOB] = useState()
    const [validationMessageGender, setValidationMessageGender] = useState()
    const  navigate=useNavigate()
    const dispatch = useDispatch()
    console.log(!dob?.toLocaleDateString()  ,"vvshfd")
    const handleSubmit = () => {
        if (!email.trim()) {
            setEmailValidationMessage(VALIDATION_MESSAGES?.EMAIL?.EMPTY)
        }
        else if (!isValidEmail.test(email)) {
            setEmailValidationMessage(VALIDATION_MESSAGES?.EMAIL?.NOT_VALID)
        }
        if (!firstName.trim()) {
            setValidationMessageFirstName(VALIDATION_MESSAGES?.FIRST_NAME?.EMPTY)
        }
        if (!lastName.trim()) {
            setValidationMessageLastName(VALIDATION_MESSAGES?.LAST_NAME?.EMPTY)
        }
       if(!dob?.toLocaleDateString()){
        setValidationMessageDOB(VALIDATION_MESSAGES?.DATE?.EMPTY)
       }
       if(!gender){
        setValidationMessageGender("Enter Valid Gender")
       }
        if (!lastName.trim()) {
            setValidationMessageLastName(VALIDATION_MESSAGES?.LAST_NAME?.EMPTY)
        }


        else if (!isValidName.test(firstName)) {
            setValidationMessageFirstName(VALIDATION_MESSAGES?.FIRST_NAME?.NOT_VALID)
        }
        else if (!isValidName.test(lastName)) {
            setValidationMessageLastName(VALIDATION_MESSAGES?.LAST_NAME?.NOT_VALID)
        }
        else {
            const myData = JSON.parse(localStorage.getItem('CurrentUser'));
            myData.email=email
            myData.first_name=firstName
            myData.last_name=lastName
            myData.dob=dob&&dob?.toLocaleString().split(",")[0]
            myData.title=gender
            localStorage.setItem("CurrentUser",JSON.stringify(myData))
            dispatch(updateProfile({ email: email, first_name: firstName, last_name: lastName, dob: dob.toLocaleString().split(",")[0], title: gender }))
           setShow(false)
        }
    }
    return (
        <ModalComponent show={show} setShow={setShow}>
            <Header heading={"Personal details"} />
            <div className='section-content'>

        
            <div className='FillingMessageDiv'>
                <span className='FillingMessage'>First Name</span>
            </div>
            <CustomInput state={firstName} setState={setFirstName} validationMessage={validationMessageFirstName} setValidationMessage={setValidationMessageFirstName} placeHolder='first Name' />
            <ValidationText message={validationMessageFirstName} />
            <div className='FillingMessageDiv'>
                <span className='FillingMessage'>Last Name</span>
            </div>
            <CustomInput state={lastName} setState={setLastName} validationMessage={validationMessageLastName} setValidationMessage={setValidationMessageLastName} placeHolder='last Name' />
            <ValidationText message={validationMessageLastName} />
            <div className='FillingMessageDiv'>
                <span className='FillingMessage'>Gender</span>
            </div>
            <CustomInput state={gender} setState={SetGender} validationMessage={validationMessageGender} setValidationMessage={setValidationMessageGender} placeHolder='gender' />
            <ValidationText message={   validationMessageGender} />
         
            <div className='FillingMessageDiv'>
                <span className='FillingMessage'>Date of Birth</span>
            </div>
            <DateInput startDate={dob} setStartDate={setDob}  setValidationMessageDOB={setValidationMessageDOB}/>
            <ValidationText message={validationMessageDOB} />
            <div className='FillingMessageDiv'>
                <span className='FillingMessage'>Email Address</span>
            </div>
            <CustomInput state={email} setState={setEmail} validationMessage={emailValidationMessage} setValidationMessage={setEmailValidationMessage} placeHolder='email' />
            <ValidationText message={emailValidationMessage} />
            </div>
            <ContinueButton ButtonText='Update' handleSubmit={() => handleSubmit()} />
        </ModalComponent>
    )
}
