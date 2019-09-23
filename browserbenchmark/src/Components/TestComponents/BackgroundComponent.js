import React, {Component} from 'react';

import {defTimer, testAttempts} from "../MainComponent";

export class BackgroundComponent extends Component {

    state = {
        attempts : testAttempts,
        style : false,
        testString : ' bkg'
    };

    constructor(props, context) {
        super(props, context);

        setTimeout(this.swapStyle, defTimer);
    }

    swapStyle = () => {
        let {style, attempts} = this.state;
        style = !style;

        if (!style) {
            attempts --;
        }

        if (attempts !== 0) {
            setTimeout(this.swapStyle, defTimer);
        }

        this.setState( {
            style, attempts
        })
    };

    render() {
        const {style, testString} = this.state;

        return (
            <div className="test">
                <div className={'object'+(style? testString : '')}>
                </div>
            </div>
        );
    }
}
