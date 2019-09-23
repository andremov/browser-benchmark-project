import React, {Component} from 'react';

export class End extends Component {
    action = event => {
        event.preventDefault();

        this.props.doEnd();
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
