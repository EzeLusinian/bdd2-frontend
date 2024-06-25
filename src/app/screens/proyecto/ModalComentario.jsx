import React, { useState } from 'react';

import closeIco from '../../../assets/modal/close.png';
import { Button } from '../../components';




export const ModalComentario = props => {
    const { cerrar, title, clickOff, show, closeButton = true, loaderContentMax = false, onSubmit, tareaId } = props;
    const [comment, setComment] = useState('');

    const backgroundHandler = () => {
        if (clickOff) cerrar();
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleCommentSubmit = () => {
        //TODO: integrar comentarios
        onSubmit(comment);
        setComment(''); 
        cerrar(); 
    };

    if (!show) return null;

    return (
        <div
            className='modalGenerico'
            onClick={backgroundHandler}
            data-testid='modal'
        >
            <div className={`loaderContent ${loaderContentMax ? 'loaderContentMax' : ''}`} onClick={e => e.stopPropagation()}>
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
                <div className='commentForm'>
                    <textarea
                        value={comment}
                        onChange={handleCommentChange}
                        placeholder={`Escribe tu comentario aquí... ${tareaId}`}
                        className='commentTextarea'
                    />
                    <br />
                    <Button 
                    isBold
                    scale={75}
                    onClick={handleCommentSubmit} className='submitButton'/>
                </div>
            </div>
        </div>
    );
};
