import React, {Component} from 'react';

export class Start extends Component {
    action = event => {
        event.preventDefault();

        window.mainComponent.setTestNumber(1);
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
