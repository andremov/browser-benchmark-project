import React, {Component} from 'react';

import {defTimer, testAttempts} from "../MainComponent";

export class RotateScaleClipComponent extends Component {

    state = {
        attempts : testAttempts,
        style : false,
        testStringOuter : ' ',
        testStringInner : ' rotatescale'
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
        const {style, testStringOuter, testStringInner} = this.state;

        return (
            <div className="test">
                <div className={'transition-object'+(style? testStringOuter : '')}>
                    <div className={'object clip'+(style? testStringInner : '')}>
                    </div>
                </div>
            </div>
        );
    }
}
