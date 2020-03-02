import React from 'react'

export const LoseScreen = (props) => {
    return (
        <div className="end-screen">
            <h1> You lost :( </h1>
            <button
            type="button" onClick={() => {
                props.setView('game')
                }}> REPLAY
            </button>
        </div>
    )
}