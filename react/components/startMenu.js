import React from 'react'

export const StartMenu = (props) => {
    return (
        <div className="menu">
            <h1> CHIMPANZEE MEMORY TEST </h1>
            <div className="custom-select">
                <h2 className="select-label"> DIFFICULTY </h2>
                <div className="selector">
                    <button type="button" onClick={() => {if (props.difficulty > 1 && props.difficulty <= 36 ) props.setDifficulty(props.difficulty - 1)}}> - </button>
                    <h1 id="difficulty">{props.difficulty}</h1>
                    <button type="button" onClick={() => {if (props.difficulty >= 1 && props.difficulty < 36 ) props.setDifficulty(props.difficulty + 1)}}> + </button>
                </div>
            </div>
            <button
            type="button" onClick={() => {
                props.setView('game')
            }}> START
            </button>
        </div>
    )
}
