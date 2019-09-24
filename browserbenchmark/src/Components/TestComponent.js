import React, {Component} from 'react';

import {defTimer, testAttempts} from "./MainComponent";

export class TestComponent extends Component {

    state = {
        attempts : testAttempts,
        style : false,
        testStringOuter : ' ',
        testStringInner : ' ',
        testNum : -1,
        doClip : false
    };

    componentDidUpdate() {
        if (this.state.testNum !== this.props.testData.testNum) {
            const {testNum, outer, inner, doClip} = this.props.testData;
            this.setState({
                attempts : testAttempts,
                style : false,
                testNum,
                testStringOuter : outer,
                testStringInner : inner,
                doClip
            });

            setTimeout(this.swapStyle, defTimer);
        }
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
        const {style, testStringOuter, testStringInner, doClip} = this.state;
        console.log(this.state);

        return (
            <div className="test">
                <div className={'transition-object'+(style? testStringOuter : '')}>
                    <div className={'object '+(doClip? ' clip' : '')+(style? testStringInner : '')}>
                    </div>
                </div>
            </div>
        );
    }
}
