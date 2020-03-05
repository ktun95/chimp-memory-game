import React from 'react'
import Tile from './tile'
import { WinScreen } from './winScreen'
import { LoseScreen } from './loseScreen'

export default class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dimensions: [4, 9],
            difficulty: (this.props.difficulty || 4), //this might be a bad idea?
            selected: [],
            board: []
        }
        this.buildGame = this.buildGame.bind(this)
        this.seedTiles = this.seedTiles.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        
        this.buildGame()
    }
    
    componentDidUpdate() {   
    }

    seedTiles() { 
        let totalTiles = this.state.dimensions[0] * this.state.dimensions[1]
        const selected = []
        while (selected.length < this.state.difficulty) {
            let tile = Math.floor(Math.random() * totalTiles)
            if (selected.indexOf(tile) === -1) {
                selected.push(tile)
            }
        }
        
        this.setState(prevState => ({...prevState, selected, test: true}))
        
        return selected
    }

    changeDifficulty(difficulty) {
        
    }
    
    buildGame() {
        let rowNum = 0
        const board = []        
        const selected = this.seedTiles()
        const rows = this.state.dimensions[0]
        const columns = this.state.dimensions[1]
        const tiles = rows * columns

        for (let i = 0; i < tiles; i++) {
            let order = null;
            
            if (i % columns === 0) {
                board.push([])
                if (i > 0) rowNum++
            }
            
            if (selected.indexOf(i) >= 0) {
                order = selected.indexOf(i) + 1
                board[rowNum].push(order)
            } else {
                board[rowNum].push(0)
            }
            
            
        }
        this.setState(prevState => ({...prevState, board }))
    }

    handleClick(tile) {   
        if (tile.props.tileNum === this.state.selected[0]) {
            const newBoard = this.state.board.slice()
            const row = Math.floor(tile.props.tileNum / this.state.dimensions[1] )
            const column = tile.props.tileNum % this.state.dimensions[1]
            newBoard[row][column] = 0
            this.setState(prevState => ({...prevState, selected: prevState.selected.slice(1)}))
            this.setState(prevState => ({...prevState, board: newBoard}))
            if (this.state.selected.length === 1) this.props.setView('win') //I feel weird about this
        } else {
            setTimeout(() => {
                this.props.setView('lose')
            }, 500)
        }
    }

    render() {
        return (
            <div id="game-container">
                {this.state.board.map((row, rindex) => {
                    return (
                        <div className="row" key={rindex}>
                            {row.map((tile, tindex) => {
                                let rowKey = tindex + (rindex * 9)
                                let type = (tile > 0 ? 'active' : 'inactive')
                                return (
                                    <Tile type={type} order={tile} key={rowKey} tileNum={rowKey} handleClick={this.handleClick} />
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }
}