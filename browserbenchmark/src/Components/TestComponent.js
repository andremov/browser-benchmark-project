import React, {Component} from 'react';
import cat from '../cat.jpg';
import {styleSwapTimer, testAttempts, preTestTime, timeoutTimer} from "./MainComponent";
/*
import {Stats} from "../Stats";
var stats = new Stats();
document.body.appendChild( stats.dom );

 */

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


    componentDidMount() {
        /*
        stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
        stats.showPanel( 1 ); // 0: fps, 1: ms, 2: mb, 3+: custom
         */
    }

    componentDidUpdate() {
        if (this.state.testNum !== this.props.testNum) {
            const num = this.props.testNum;
            const testName = this.props.testName;
            let testData = this.props.testData;
            testData.testNum = num;
            testData.testName = testName;
            testData.attempts = testAttempts;

            this.setState(
                testData
            );

            /*
            En {preTestTime} cambia el estilo por primera vez
             */

            setTimeout(this.callStartMark, 100);
            setTimeout(this.swapStyle, preTestTime);
        }
    }

    callStartMark = () => {
        /*
        console.log('start mark!');
        stats.begin();
        performance.mark(this.state.testName + ' start');
         */
    };

    callEndMark = () => {
        /*
        console.log('end mark!');
        stats.end();
        performance.mark(this.state.testName + ' end');
        performance.measure("measure test #"+this.state.testNum,this.state.testName + ' start',this.state.testName + ' end');
        console.log(performance.getEntriesByType("measure"));
         */
    };

    swapStyle = () => {
        let {style, attempts} = this.state;
        style = !style;

        if (!style) {
            attempts --;
        }

        if (attempts > 0) {
            setTimeout(this.swapStyle, styleSwapTimer+timeoutTimer);
        } else {
            setTimeout(this.callEndMark, styleSwapTimer+100);
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
