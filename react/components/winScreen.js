import React from 'react'

export const WinScreen = (props) => {
    return (
        <div className="end-screen">
            <h1> YOU WIN! </h1>
            <button
            type="button" onClick={() => {
                props.setDifficulty(props.difficulty + 1)
                props.setView('game')
                }}> NEXT LEVEL
            </button>
        </div>
    )
}