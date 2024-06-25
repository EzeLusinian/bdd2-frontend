import React, { useEffect, useState } from 'react';

import closeIco from '../../../assets/modal/close.png';
import useGetEmpleados from '../../../services/tarea/useGetEmpleados';
import { Button } from '../../components'



export const ModalAsignarEmpleadoAProyecto = ({ show, cerrar, title, clickOff, closeButton = true, loaderContentMax = false, onSubmit}) => {
    

    const [empleados, setEmpleados] = useState([])
    const [selectedEmpleado, setSelectedEmpleado] = useState()
    // useEffect(() => {
    //      useGetEmpleados(setEmpleados)
    // }, []);

    
    

    const backgroundHandler = () => {
        if (clickOff) cerrar();
    };

    const handleEmpleadoChange = (event) => {
        setSelectedEmpleado(event.target.value);
    };

    const handleAsignarEmpleadoSubmit = () => {
        //TODO: integrar
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
                    
                    onChange={handleEmpleadoChange}
                    className='estadoDropdown'
                >
                    {empleados.map(empleado => (
                        <option value={empleado.id}>{`${empleado.nombre}  ${empleado.apellido}`}</option>
                    ))}
                </select>
                <Button
                    isBold
                    scale={75}
                    label='Asignar'
                    onClick={handleAsignarEmpleadoSubmit}
                    />
            </div>
        </div>
    );
};
