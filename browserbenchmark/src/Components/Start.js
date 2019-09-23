import React, {Component} from 'react';

export class Start extends Component {
    next = event => {
        event.preventDefault();

        this.props.doStart();
    };

    render() {
        return (
            <div className="test">
                <div onClick={this.next} className="btn">
                    Start
                </div>
            </div>
        );
    }
}
