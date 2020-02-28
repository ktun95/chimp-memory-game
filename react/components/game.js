import React from 'react'
import Tile from './tile'
import { WinScreen } from './winScreen'

//blank -> numbered -> hidden

export default class Game extends React.Component {
    constructor() {
        super()
        this.state = {
            dimensions: [4, 9],
            difficulty: 4,
            selected: [],
            board: [],
        }
        this.buildGame = this.buildGame.bind(this)
        this.seedTiles = this.seedTiles.bind(this)
        this.checkWin = this.checkWin.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        // this.seedTiles()
        this.buildGame()
    }
    
    componentDidUpdate() {   
        this.checkWin()
    }

    seedTiles() { //returns an array of integers representing the # of acfive tiles
        // console.log('seedTiles() is running', this.state)
        let totalTiles = this.state.dimensions[0] * this.state.dimensions[1]
        const selected = []
        while (selected.length < this.state.difficulty) {
            let tile = Math.floor(Math.random() * totalTiles)
            if (selected.indexOf(tile) === -1) {
                selected.push(tile)
            }
        }
        // console.log('setting selected state with', selected)
        this.setState(prevState => ({...prevState, selected, test: true}))
        // console.log('selected state set!', this.state.selected)
        return selected
    }

    checkWin() {
        if (!this.state.selected.length) console.log('win!')
    }
    
    buildGame() {
        // console.log("buildGame() is running", this.state)
        // this.seedTiles()
        let rowNum = 0
        const board = []
        // const selected = this.state.selected
        const selected = this.seedTiles()
        // console.log(selected)
        const rows = this.state.dimensions[0]
        const columns = this.state.dimensions[1]
        const tiles = rows * columns

        for (let i = 0; i < tiles; i++) {
            let order = null;
            // let tileType
            
            if (i % columns === 0) {
                // console.log(i)
                board.push([])
                // this.setState((prevState) => [...prevState, []])
                if (i > 0) rowNum++
            }
            
            if (selected.indexOf(i) >= 0) {
                // tileType = "active"
                order = selected.indexOf(i) + 1
                board[rowNum].push(order)
            } else {
                // tileType = "inactive"
                board[rowNum].push(0)
            }
            // this.state.board.push( <Tile key={i} type={tileType} order={order}/>)
            
        }
        this.setState(prevState => ({...prevState, board }))
        console.log('board state set!', this.state.board)
    }

    handleClick(tile) {
        // console.log(tile)
        if (tile.props.tileNum === this.state.selected[0]) {
            const row = Math.floor(tile.props.tileNum / this.state.dimensions[1] )
            const column = tile.props.tileNum % this.state.dimensions[1]
            const newBoard = this.state.board.slice()
            newBoard[row][column] = 0
            this.setState(prevState => ({...prevState, selected: prevState.selected.slice(1)}))
            this.setState(prevState => ({...prevState, board: newBoard}))
        } else {
            console.log('Oops!`')
        }
        // console.log(e.target.getAttribute('class'))

        // if (e.target.className === 'tile hidden') {
        //     e.target.className = 'tile inactive'
        // }
    }

    render() {
        console.log('rendering')
        const win = (!this.state.selected.length)
        return (
            win ?
            <WinScreen />
            : <div id="game-container">
                {this.state.board.map((row, rindex) => {
                    return (
                        <div className="row" key={rindex}>
                            {row.map((tile, tindex) => {
                                let rowKey = tindex + (rindex * 9)
                                let type = (tile > 0 ? "active" : "inactive")
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