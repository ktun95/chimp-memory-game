import React, { useState } from 'react'
import { Game, WinScreen, LoseScreen, startMenu, StartMenu  } from './components'

export const Main = () => {

    const [difficulty, setDifficulty] = useState(4)
    const [view, setView] = useState('start') // game/lose/win

    return (
        <React.Fragment>
            {   view === 'start' ?
                <StartMenu setView={setView} setDifficulty={setDifficulty} difficulty={difficulty} /> :
                view === 'game' ?
                <Game setView={setView} difficulty={difficulty} /> :
                view === 'win' ?
                <WinScreen setView={setView} setDifficulty={setDifficulty} difficulty={difficulty} /> :
                view === 'lose' ?
                <LoseScreen setView={setView} /> :
                <h1> Whoops </h1>
            }
        </React.Fragment>
    )    
}