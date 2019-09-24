import React, {Component} from 'react';
import cat from '../cat.jpg';
import {defTimer, testAttempts} from "./MainComponent";

export class TestComponent extends Component {

    state = {
        attempts : testAttempts,
        style : false,
        testStringOuter : ' ',
        testStringInner : ' ',
        testNum : -1,
        doClip : false,
        doCat : false,
        doMulti : false
    };

    componentDidUpdate() {
        if (this.state.testNum !== this.props.testNum) {
            const num = this.props.testNum;
            let testData = this.props.testData;
            testData.testNum = num;
            testData.attempts = testAttempts;

            this.setState(

                    testData

            );

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
        const {style, testStringOuter, testStringInner, doClip, doCat, doMulti} = this.state;


        return (
            <div className="test">
                <div className={'transition-object'+(style? testStringOuter : '')}>
                    {
                        !doCat?
                            <div className={'object ' + (doClip ? ' clip' : '') + (style ? testStringInner : '')}>
                            </div>
                            :
                            <img src={cat} alt='img' className={'object ' + (doClip ? ' clip' : '') + (style ? testStringInner : '')} />
                    }
                </div>

                {
                    doMulti ?
                        (
                            <div className={'transition-object'+(style? testStringOuter : '')}>
                                {
                                    !doCat?
                                        <div className={'object ' + (doClip ? ' clip' : '') + (style ? testStringInner : '')}>
                                        </div>
                                        :
                                        <img src={cat} alt='img' className={'object ' + (doClip ? ' clip' : '') + (style ? testStringInner : '')} />
                                }
                            </div>
                        )
                            :
                            ''
                }

                {
                    doMulti ?
                        (
                            <div className={'transition-object'+(style? testStringOuter : '')}>
                                {
                                    !doCat?
                                        <div className={'object ' + (doClip ? ' clip' : '') + (style ? testStringInner : '')}>
                                        </div>
                                        :
                                        <img src={cat} alt='img' className={'object ' + (doClip ? ' clip' : '') + (style ? testStringInner : '')} />
                                }
                            </div>
                        )
                        :
                        ''
                }

                {
                    doMulti ?
                        (
                            <div className={'transition-object'+(style? testStringOuter : '')}>
                                {
                                    !doCat?
                                        <div className={'object ' + (doClip ? ' clip' : '') + (style ? testStringInner : '')}>
                                        </div>
                                        :
                                        <img src={cat} alt='img' className={'object ' + (doClip ? ' clip' : '') + (style ? testStringInner : '')} />
                                }
                            </div>
                        )
                        :
                        ''
                }
            </div>
        );
    }
}
