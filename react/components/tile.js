import React from 'react'

export default class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hidden: false,
            class: 'tile' + ` ${this.props.type}`
        }
        this.hide = this.hide.bind(this)
    }

    componentDidMount() {
        console.log('component mounted', this.props)
        this.hide()
    }

    hide() {
        setTimeout(() => {
            if (this.props.type === 'active') {
                console.log('hiding tile')
                this.setState((prevState) => ({...prevState, class: 'tile hidden'}))
            }
        }, 1000)
    }


    render() {
        return (
            <div className={this.state.class} onClick={this.props.onClick}>
                {(this.state.class === 'tile active') ? `${this.props.order}` : null}
            </div>
        )        
    }
}