import React from 'react'
import CustomLinkListCreator from '../../../Atoms/CustomLinkListCreator'
import PathTo from '../../../Atoms/PathTo'
import Linkto from '../../../Atoms/LinkTo'

export default function AccountDetailsUpdate() {
    const profileViewList=["Ratings given","Postal Address"]
  return (
    <div>
       {profileViewList.map(val=><CustomLinkListCreator linkText={val}/>)}
  
       <Linkto linkText="CloseMyAccount" picNeeded={false} route={"/dashboard/profile/close"}/>
    </div>
  )
}
