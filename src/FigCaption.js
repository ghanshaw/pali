import React, { Component } from 'react';

class FigCaption extends Component {

    constructor(props) {
        super(props)
        this.src = this.props.src;
        this.header = this.props.header;
        this.body = this.props.body;
        this.alignment = this.props.alignment; //left, right, center
    }

    render() {
        return (
            <div className={this.alignment + " figCaption flex-parent text-align-center column"}>
                <img src={this.src} className="img" />
                <h3 className="bold header">{this.header}</h3>
                <h5 className="body">{this.body}</h5>
            </div>
        )
    }
}

export default FigCaption;