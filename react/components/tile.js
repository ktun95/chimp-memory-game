import React from 'react'

export default class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hidden: false,
            class: 'tile' + ` ${this.props.type}`
        }
        // this.hide = this.hide.bind(this)
    }

    // componentDidMount() {
    //     console.log('component mounted')
    //     this.hide()
    // }

    // hide() {
    //     setTimeout(() => {
    //         if (this.props.type === 'active') {
    //             this.props.type = 'hidden'
    //         }
    //     }, 2000)
    // }

    render() {
        return (
            <div className={this.state.class}>
                {(this.props.type === 'active') ? `${this.props.order}` : null}
            </div>
        )        
    }
}