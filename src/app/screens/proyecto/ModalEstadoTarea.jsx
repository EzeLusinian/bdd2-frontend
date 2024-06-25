import React, { useState } from 'react';

import closeIco from '../../../assets/modal/close.png';

import { Button} from '../../components'



export const ModalEstadoTarea = ({ show, cerrar, title, clickOff, closeButton = true, loaderContentMax = false, onSubmit, tareaId }) => {
    const [selectedEstado, setSelectedEstado] = useState('Por hacer');

    const estados = ['Por hacer', 'En desarrollo', 'En pruebas', 'Finalizado'];

    const backgroundHandler = () => {
        if (clickOff) cerrar();
    };

    const handleEstadoChange = (event) => {
        setSelectedEstado(event.target.value);
    };

    const handleEstadoSubmit = () => {
        //TODO: integrar
        onSubmit(selectedEstado, tareaId);
        cerrar(); // Close the modal after submission
    };

    if (!show) return null;

    return (
        <div className='modalGenerico' onClick={backgroundHandler} data-testid='modal'>
            <div className={`loaderContent ${loaderContentMax ? 'loaderContentMax' : ''}`} onClick={e => e.stopPropagation()}>
                {
                    closeButton && (
                        <div data-testid='cerrar' className='closeButton' onClick={cerrar}>
                            <img src={closeIco} alt='close' className='close-ico' />
                        </div>
                    )
                }
                {
                    title && <div className='descText'>{title}</div>
                }
                <select
                    value={selectedEstado}
                    onChange={handleEstadoChange}
                    className='estadoDropdown'
                >
                    {estados.map(estado => (
                        <option key={estado} value={estado}>{estado}</option>
                    ))}
                </select>
                <Button
                    isBold
                    scale={75}
                    label='Cambiar estado'
                    onClick={handleEstadoSubmit}
                    className='submitButton' />
            </div>
        </div>
    );
};
