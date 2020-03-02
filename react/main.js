import React, { useState } from 'react'
import { Header, Game, WinScreen, LoseScreen  } from './components'

export const Main = () => {

    const [difficulty, setDifficulty] = useState(4)
    const [view, setView] = useState('game') // game/lose/win

    return (
        <React.Fragment>
            <Header />
            { 
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