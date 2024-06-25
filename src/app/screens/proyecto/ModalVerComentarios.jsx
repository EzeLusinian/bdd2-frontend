import React from 'react';
import closeIco from '../../../assets/modal/close.png';
import './ModalVerComentario.css'

//TODO: integrar
export const ModalVerComentarios = ({ show, cerrar, title, clickOff, closeButton = true, loaderContentMax = false }) => {
    const comentarios = [
        {
          comentario: "comentario de la primera tarea",
          fechaHora: "2024-06-21T23:29:51.168"
        },
        {
            comentario: "comentario de la primera tarea 2",
            fechaHora: "2024-06-21T23:29:51.168"
          }
      ]
    const backgroundHandler = () => {
        if (clickOff) cerrar();
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
                <div className='comentariosList'>
                    {comentarios.length > 0 ? (
                        comentarios.map((comentario, index) => (
                            <div key={index} className='comentarioItem'>
                                <div className='mensajeWpp'>
                                    <p>{comentario.comentario}</p>
                                    <span>{comentario.fechaHora}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No hay comentarios.</p>
                    )}
                </div>
                <button onClick={cerrar} className='submitButton'>Cerrar</button>
            </div>
        </div>
    );
};
