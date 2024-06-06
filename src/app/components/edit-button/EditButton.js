import React from 'react'

import { useNavigate } from 'react-router-dom'

import editIco from '../../../assets/business/edit.png'

import './EditButton.scss'

export const EditButton = () => {

    const navigate = useNavigate()

    const handleClick = () => navigate('/business/edit-business')

    return (
        <div className='div-editBtn'>
            <button className="editBtn" onClick={handleClick}>
                <img
                    src={editIco}
                    className='edit-ico-button-img'
                    alt='edit'
                />
            </button>
        </div>
    )
}