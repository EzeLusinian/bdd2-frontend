import React from 'react';

import './Button.scss';

const  Button = ( { onClick, text } ) => { 
  return (
    <div onClick={onClick} className='button'>
      <button className='btn'>
        <p className='texto'>{text}</p>
      </button>
    </div>
  )
}

export default Button
