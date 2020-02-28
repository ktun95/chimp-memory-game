import React from 'react'

export default class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hidden: false,
        }
        this.hide = this.hide.bind(this)
    }
    
    componentDidMount() {
        // console.log(this.props)
        // console.log('component mounted', this.props)
        this.hide()
        // console.log('component mountingTILE TILE TILE')
    }

    // componentDidUpdate() {
    //     this.hide()
    // }

    hide() {
        setTimeout(() => {
            if (this.props.type === 'active') {
                console.log('hiding tile')
                this.setState((prevState) => ({...prevState, hidden: true}))
            }
        }, 1000)
    }

    handleClick(tile) {
        if (this.state.hidden) this.setState({hidden: false})
        console.log(this.state.hidden)
        this.props.handleClick(tile)
    }

    render() {
        console.log('tiles rendering')
        return (
            <div className={`tile ${this.state.hidden ? 'hidden' : this.props.type}`} onClick={() => this.handleClick(this)} data-key={this.props.key}>
                {this.props.type === 'active' && !this.state.hidden ? `${this.props.order}` : null}
            </div>
        )        
    }
}