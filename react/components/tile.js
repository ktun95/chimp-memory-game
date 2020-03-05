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
        this.hide()
    }

    hide() {
        setTimeout(() => {
            if (this.props.type === 'active') {
                this.setState((prevState) => ({...prevState, hidden: true}))
            }
        }, 1000)
    }

    handleClick(tile) {
        if (this.state.hidden) this.setState({hidden: false})
        if (this.props.type === 'active') this.props.handleClick(tile)
    }

    render() {
        return (
            <div className={`tile ${this.state.hidden ? 'hidden' : this.props.type}`} onClick={() => this.handleClick(this)}>
                {this.props.type === 'active' && !this.state.hidden ? `${this.props.order}` : null}
            </div>
        )        
    }
}