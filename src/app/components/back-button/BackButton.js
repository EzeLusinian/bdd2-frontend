import React from 'react'

import backIco from '../../../assets/business/back.png'

import './BackButton.scss'

export const BackButton = ({
    onClick,
    text
}) => {
    return (
        <div className='div-back-business'>
            <button
                onClick={onClick}
                className='button-back-business'
            >
                <img
                    src={backIco}
                    className='ico-back-business'
                    alt='back'
                />
                {text}
            </button>
        </div>
    )
}