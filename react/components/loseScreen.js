import React from 'react'

export const LoseScreen = (props) => {
    return (
        <div className="menu">
            <h1> You lost :( </h1>
            <button
            type="button" onClick={() => {
                props.setView('start')
                }}> MAIN MENU
            </button>
            <button
            type="button" onClick={() => {
                props.setView('game')
            }}>
            REPLAY
            </button>
            {/* <video width="320" height="240" controls autoPlay loop>
                <source src="https://thumbs.gfycat.com/InformalMiniatureBlacklab-mobile.mp4" type="video/mp4" />
            </video> */}
        </div>
    )
}