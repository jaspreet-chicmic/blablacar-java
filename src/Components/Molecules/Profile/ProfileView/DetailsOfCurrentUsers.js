import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails, getVehicleData } from '../../../../Redux/Actions'
import { Images } from '../../../../Shared/Images'
import "../styles.css"
import { MONTHS } from '../../../../Shared/Constants'
export default function DetailsOfCurrentUsers() {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state?.CurrentUserReducer)?.currentUser
    const Pic = useSelector(state => state?.profilePicReducer)
    useEffect(() => {

        dispatch(getUserDetails())
        dispatch(getVehicleData())

    }, [])
    const date = new Date()
    return (
        <div className='section-content'>

            <div className='userDetails'>
                <div className='userDataDisplay'>
                    <div className='columnOne'>
                        <label className={`firstName`}>
                            {currentUser?.first_name||"first_name"}
                        </label>
                        <label className='age'>
                            {date.getFullYear() - currentUser?.dob?.split("-")[0]||0} y/o

                        </label>
                    </div>
                    <div className='columnTwo'>
                        { <div className='profilePicView' >
                            {Pic ? <img className='profilePicData' src={Pic} alt=""></img> : <img className='profilePicData' src={Images.profile} alt=""></img>}
                        </div>}
                    </div>
                </div>
                <div className='userBioDisplay'>
                <label className={`userBio`}>
                           About {currentUser?.first_name}
                        </label>
                        <label className={`userBioData`}>
                          <img className='bioPic' src={Images?.bio} alt=""></img>{currentUser?.bio||"I’m chatty when I feel comfortable"}
                        </label>
                </div>
                <div className='borderPanel'/>
                <div className='userBioDisplay'>
               
                        <label className={`userBioData`}>
                      Member since {(MONTHS[(currentUser?.created_at&&currentUser?.created_at.split("T")[0].split("-")[1].split("")[1])])} {(currentUser?.created_at&&currentUser?.created_at.split("T")[0].split("-")[0])}
                        </label>
                </div>
            </div>


  


        </div>
    )
}
