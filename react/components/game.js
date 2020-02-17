import React from 'react'
import Tile from './tile'


//blank -> numbered -> hidden

export default class Game extends React.Component {
    constructor() {
        super()
        this.state = {
            tiles: 36,
            difficulty: 4,
            tileArray: [[], [], [], []]
        }
        this.buildGame = this.buildGame.bind(this)
        this.seedTiles = this.seedTiles.bind(this)
    }

    componentDidMount() {

    }

    seedTiles() {
        console.log('seeding tiles')
        const selected = []
        while (selected.length < this.state.difficulty) {
            let tile = Math.floor(Math.random() * this.state.tiles)
            if (selected.indexOf(tile) === -1) {
                selected.push(tile)
            }
        }
        return selected
    }

    hideTiles() {
    
    }
    
    buildGame() {
        // const tileArray = [
        //     [], [], [], []
        // ]
        let rowNum = -1
        const selected = this.seedTiles()

        for (let i = 0; i < this.state.tiles; i++) {
            let order = null;
            let tileType
            
            if ( i % 9 === 0) {
                console.log(i)
                rowNum++
            }
            
            if (selected.indexOf(i) >= 0) {
                tileType = "active"
                order = selected.indexOf(i) + 1
                
            } else {
                tileType = "inactive"
            }
            this.state.tileArray[rowNum].push( <Tile key={i} type={tileType} order={order}/>)
            
        }
        console.log(selected)
        return (
            <React.Fragment>
                <div className="row">
                    {this.state.tileArray[0]}
                </div>
                <div className="row">
                    {this.state.tileArray[1]}
                </div>
                <div className="row">
                    {this.state.tileArray[2]}
                </div>
                <div className="row">
                    {this.state.tileArray[3]}
                </div>
            </React.Fragment> //TERRIBLE SOLUTION PROBABLY BUT OH WELL FOR NOW
        )
    }

    render() {
        return (
            <div id="game-container">
                    {this.buildGame()}
            </div>
        )
    }
}