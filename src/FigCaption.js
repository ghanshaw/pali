import React, { Component } from 'react';

class FigCaption extends Component {

    constructor(props) {
        super(props)
        this.src = this.props.src;
        this.header = this.props.header;
        this.body = this.props.body;
    }

    render() {
        return (
            <div className="figCaption flex-parent text-align-center column">
                <img src={this.src} className="img" />
                <h3 className="bold">{this.header}</h3>
                <h5 className="line-height-1_5">{this.body}</h5>
            </div>
        )
    }
}

export default FigCaption;