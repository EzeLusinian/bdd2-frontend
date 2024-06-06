import React from 'react'

import closeIco from '../../../assets/modal/close.png'

import './Modal.scss'

export const Modal = props => {

    const { cerrar, title, clickOff, show, closeButton = true, loaderContentMax = false } = props

    const backgroundHandler = () => {
        if (clickOff) cerrar()
    }

    if (!show) return null;

    return (
        <div
            className='modalGenerico'
            onClick={backgroundHandler}
            data-testid='modal'
        >

            <div className={`loaderContent ${loaderContentMax ? 'loaderContentMax' : ''}`}>

                {
                    closeButton && (
                        <div
                            data-testid='cerrar'
                            className='closeButton'
                            onClick={cerrar}>
                            <img src={closeIco} alt='close' className='close-ico' />
                        </div>
                    )
                }

                {
                    title && <div className='descText'>{title}</div>
                }
                
                {
                    props.children
                }

            </div>

        </div>
    )
}