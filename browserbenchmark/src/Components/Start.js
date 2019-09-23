import React, {Component} from 'react';

export class Start extends Component {
    action = event => {
        event.preventDefault();

        this.props.doStart();
    };

    render() {
        return (
            <div className="test">
                <div onClick={this.action} className="btn">
                    Start
                </div>
            </div>
        );
    }
}
