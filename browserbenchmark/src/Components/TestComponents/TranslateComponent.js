import React, {Component} from 'react';

import {defTimer} from "../MainComponent";

let attempts = 3;
let style = false;
let test = ' translate';

export class TranslateComponent extends Component {

    constructor(props, context) {
        super(props, context);

        setTimeout(this.swapStyle, defTimer);
    }

    swapStyle = () => {

        style = !style;

        if (!style) {
            attempts --;
        }

        if (attempts !== 0) {
            setTimeout(this.swapStyle, defTimer);
        }

        this.forceUpdate();
    };

    render() {
        return (
            <div className="test">
                <div className={'object'+(style? test : '')}>
                </div>
            </div>
        );
    }
}
