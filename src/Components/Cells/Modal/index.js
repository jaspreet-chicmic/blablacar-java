import React from 'react'
import Header from '../../Atoms/Header'
import "./styles.css"
import { Images } from '../../../Shared/Images'
export default function ModalComponent({ show, setShow = () => { },children }) {
    return (
        <>
            {show && <div className='Modal-Container'>
     
                <img src={Images?.additionIcon} alt="" onClick={() => { setShow(false) }} className='Modal-CloseBtn'></img>
             {children}
            </div>}
        </>
    )
}
