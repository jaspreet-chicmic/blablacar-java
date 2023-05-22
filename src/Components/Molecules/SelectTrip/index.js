import React, { useState } from 'react'
import "./styles.css"
import { Images } from '../../../Shared/Images'
import { useNavigate } from 'react-router-dom'
import CustomLinkListCreator from '../../Atoms/CustomLinkListCreator'
import GetCities from '../../Cells/GetCities'
export default function SelectTrip() {
    const [pickUpLocation,setPickUpLocation]=useState()
    const [dropOfLocation,setDropOfLocation]=useState()
    const [date,setDate]=useState()
    const [noOfPassangers,setNoOfPassangers]=useState()
    const [coordinates,setCoordinates]=useState({})

    const [city,setCity]=useState([])
    const navigate=useNavigate()
    return (
        <div className="selectTripDiv" >
            <form className="selectTripForm" >
                <div className="selectTripDataInputDiv" >
                    <label className="selectTripDataLabel">
                        <img src={Images?.ring} alt="" />
                    </label>
                    <input value={pickUpLocation}  onChange={(e)=>{setPickUpLocation(e.target.value)}} type="search" placeholder="Leaving from..." className="selectTripDataInput" />
                    <GetCities customInputNeeded={false} searchedLocation={pickUpLocation} city={city} coordinates={coordinates} setSearchedLocation={setPickUpLocation} setCity={setCity} setCoordinates={setCoordinates}/>
                 {city?.map(val=><li className='citiesList'>{city[0]}</li>)}
                </div>
                <hr className="seperator" />
                <div className="selectTripDataInputDiv" >
                    <label className="selectTripDataLabel"  >
                        <img src={Images?.ring} alt="" />
                    </label>
                    <input value={dropOfLocation}  onChange={(e)=>{setDropOfLocation(e.target.value)}} type="search" placeholder="Going to..." className="selectTripDataInput" />
                </div>
                <hr className="seperator" />
                <div className="selectTripDataInputDiv" >
                    <button type="button" className="selectTripButton">
                        <input id="g" type="date" className="selectTripDataInput" ></input>
                    </button>
                </div>
              
                <div className="selectTripDataInputDiv" >
                    <button type="button" className="selectTripButton" >
                        <img src={Images?.userProfileIcon} alt="" />
                        <span className="selectTripSpan" >1 </span>
                    </button>
                </div>

                <div className="searchTripButton" onClick={()=>{navigate("/search-car-sharing")}}>
                    <button type="submit" className="selectTripButton"  >
                        <span className="searchTripSpan" >Search</span>
                    </button>
                </div>
            </form>
        </div>
    )
}
