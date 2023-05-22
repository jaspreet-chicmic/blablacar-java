import React, { useEffect, useState } from 'react'
import CustomLinkListCreator from '../../../Atoms/CustomLinkListCreator'
import Linkto from '../../../Atoms/LinkTo'
import "../styles.css"
import PathTo from '../../../Atoms/PathTo'

import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails, getVehicleData} from '../../../../Redux/Actions'
import { Images } from '../../../../Shared/Images'

export default function NameAndProfilePicView({ setShowEditPersonalDetails = () => { }, setShowMiniBio = () => { },setShowEmailVerificationModal }) {
    
    const userData = JSON.parse(localStorage.getItem(("CurrentUser")))
    const dispatch = useDispatch()
    const currentUser=useSelector(state=>state?.CurrentUserReducer)
    useEffect(() => {
     
        dispatch(getUserDetails())
        dispatch(getVehicleData({}))
       
    }, [])
    const StoreData = useSelector(state => state)

    const handleSelect = () => { }
    return (
        <div className='profile'>
            <div className='profileMain'>
                <CustomLinkListCreator pic={true} profileViewLink={true} linkText={userData?.first_name} handleSelect={handleSelect} profilePic={StoreData?.profilePicReducer} route="/user/show"/>
                <Linkto linkText='Add profile picture' route="/dashboard/profile/picture" />
                <PathTo linkText='Edit Personal Details' picNeeded={false} setShow={setShowEditPersonalDetails} />
            </div>
            <div className='profileMain'>
                <h1 className='headingData'>Verify Your Profile</h1>
                <div className='emailView'>

                <PathTo linkText={!currentUser?.currentUser?.activated?`Confirm email ${currentUser?.currentUser?.email}`:`${currentUser?.currentUser?.email}`} setShow={setShowEmailVerificationModal} activated={currentUser?.currentUser?.activated} picNeeded={false}/>
                 <label className={currentUser?.currentUser?.activated?`verified`:`notverified`} >{currentUser?.currentUser?.activated?"verified":"notVerified"} </label> 
                </div>
            </div>
            <div className='profileMain'>
                <h1 className='headingData'>About You</h1>
                <PathTo linkText='Add a mini bio' setShow={setShowMiniBio} />
               <div className='bio'>

                <label className='userBioData'> <img className='bioPic' src={Images?.bio} alt=""></img> {currentUser?.currentUser?.bio||"I’m chatty when I feel comfortable"}</label>
               </div>
            </div>
            <div className='profileMain'>
                <h1 className='headingData'>Vehicles</h1>
                  {console.log(StoreData?.vehicleDataReducer,"ghdffh")}
                {(StoreData?.vehicleDataReducer)?.map(val =>
                    <div>
                        <CustomLinkListCreator
                            linkText={
                                `VehicleName : ${val?.vehicle_name}  
                                    VehicleColor :${val?.vehicle_color}`
                            }
                            route={`/dashboard/profile/vehicle/${val?.id}`}
                        />
                    </div>
                )}

                <Linkto linkText='Add vehicle' route="/dashboard/profile/vehicle/add" />
            </div>

        </div>

    )
}
