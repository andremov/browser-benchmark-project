import React, {Component} from 'react';
import {Start} from "./Start";
import {End} from "./End";
import {TestComponent} from "./TestComponent";
export const defTimer = 2000;
export const testAttempts = 3;

const skip = 1;
const testLength = 15;
const tests = [
    {
        name : '',
        comp : <Start />,
        timed : false,
        titled : false,
        isTest : false
    },
    {
        outer : ' ',
        inner : ' rotate',
        doClip : false,
        isTest : true,
        name : 'Rotate Test',
        timed : true,
        titled : true
    },
    {
        outer : ' ',
        inner : ' scale',
        doClip : false,
        isTest : true,
        name : 'Scale Test',
        timed : true,
        titled : true
    },
    {
        outer : ' ',
        inner : ' rotate scale',
        doClip : false,
        isTest : true,
        name : 'Scale + Rotate Test',
        timed : true,
        titled : true
    },
    {
        outer : ' shadow',
        inner : ' ',
        doClip : false,
        isTest : true,
        name : 'Drop Shadow Test',
        timed : true,
        titled : true
    },
    {
        outer : ' shadow',
        inner : ' scale',
        doClip : false,
        isTest : true,
        name : 'Shadow + Scale Test',
        timed : true,
        titled : true
    },
    {
        outer : ' shadow',
        inner : ' rotate scale',
        doClip : false,
        isTest : true,
        name : 'Shadow + Scale + Rotate Test',
        timed : true,
        titled : true
    },
    {
        outer : ' ',
        inner : ' bkg',
        doClip : false,
        isTest : true,
        name : 'Background Test',
        timed : true,
        titled : true
    },
    {
        outer : ' shadow',
        inner : ' bkg',
        doClip : false,
        isTest : true,
        name : 'Background + Shadow Test',
        timed : true,
        titled : true
    },
    {
        outer : ' shadow',
        inner : ' bkg scale',
        doClip : false,
        isTest : true,
        name : 'Background + Shadow + Scale Test',
        timed : true,
        titled : true
    },
    {
        outer : ' shadow',
        inner : ' bkg rotate scale',
        doClip : false,
        isTest : true,
        name : 'Background + Shadow + Scale + Rotate Test',
        timed : true,
        titled : true
    },

    /*
    {
        name : 'Clip Path Test',
        comp : <ClipComponent />,
        timed : true,
        titled : true
    },
    {
        name : 'Background Test',
        comp : <BackgroundComponent />,
        timed : true,
        titled : true
    },
    */
    {
        name: '',
        comp: <End/>,
        timed: false,
        titled: false,
        isTest : false
    }
];

export class MainComponent extends Component {

    state = {
        currentTest : 0,
        progress : 0
    };

    constructor(props, context) {
        super(props, context);

        window.mainComponent = this;

    }

    componentDidMount() {
        setInterval(this.handleProgress,1000)
    }

    handleProgress = () => {
        let p = this.state.progress;
        let t = this.state.currentTest;
        if (tests[t].timed) {
            if (p >= testLength) {
                t++;
                p = -1;
            }
            this.setState({
                progress: p + 1,
                currentTest: t
            });
        }
    };

    setTestNumber = (test) => {
        if (test === 1) {
            test = skip;
        }
        this.setState({
            progress : 0,
            currentTest : test
        });
    };

    render() {
        const {progress : p, currentTest : t} = this.state;
        const {outer, inner, doClip} = tests[t];

        return (
            <div>
                <div className='header'>
                    <span className='title'>Browser Benchmark</span>
                    {tests[t].titled ?
                        <span className='subtitle'>{t + '. ' + tests[t].name}</span> :
                        ''
                    }
                </div>
                { tests[t].isTest ?
                    <TestComponent testData={{outer, inner, testNum: t, doClip}}/>
                    :
                    tests[t].comp
                }
                <div className='bar' style={{"width" : (((p/testLength)*100)+'%')}}>
                    <div className='progress'>
                    </div>
                </div>

                <div className='devs'>
                    <span className='title'>Desarrollado por:</span>
                    <span className='names'>Mario Donato, Jose Luis Martinez, y Andrés Movilla.</span>
                    <span className='year'>2019.</span>
                </div>
            </div>
        );
    }
}
