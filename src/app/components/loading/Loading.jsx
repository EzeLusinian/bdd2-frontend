import React from 'react'

import './Loading.scss'

export const Loading = () => {
    return (
        <div className="typing-indicator">
            <div className="typing-circle"></div>
            <div className="typing-circle"></div>
            <div className="typing-circle"></div>
        </div>
    )
}