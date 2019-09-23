import React, {Component} from 'react';

export class End extends Component {
    action = event => {
        event.preventDefault();

        window.mainComponent.setTestNumber(0);
    };

    render() {
        return (
            <div className="test">
                Finished.

                <div onClick={this.action} className="btn">
                    Back
                </div>
            </div>
        );
    }
}
