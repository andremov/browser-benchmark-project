import React, {Component} from 'react';
import {Start} from "./Start";
import {End} from "./End";
import {ShadowComponent} from "./TestComponents/ShadowComponent";
import {TranslateComponent} from "./TestComponents/TranslateComponent";
import {ClipComponent} from "./TestComponents/ClipComponent";
import {ClipShadowComponent} from "./TestComponents/ClipShadowComponent";
import {ScaleClipComponent} from "./TestComponents/ScaleClipComponent";
import {ScaleComponent} from "./TestComponents/ScaleComponent";
import {ScaleClipShadowComponent} from "./TestComponents/ScaleClipShadowComponent";
import {BackgroundComponent} from "./TestComponents/BackgroundComponent";
import {BackgroundScaleComponent} from "./TestComponents/BackgroundScaleComponent";
import {BackgroundClipScaleComponent} from "./TestComponents/BackgroundClipScaleComponent";
import {BackgroundClipScaleShadowComponent} from "./TestComponents/BackgroundClipScaleShadowComponent";
import {RotateComponent} from "./TestComponents/RotateComponent";
import {RotateScaleComponent} from "./TestComponents/RotateScaleComponent";
import {RotateScaleClipComponent} from "./TestComponents/RotateScaleClipComponent";
import {RotateScaleClipShadowComponent} from "./TestComponents/RotateScaleClipShadowComponent";
import {RotateScaleClipShadowBackgroundComponent} from "./TestComponents/RotateScaleClipShadowBackgroundComponent";
export const defTimer = 2000;
export const testAttempts = 3;

const skip = 1;
const testLength = 15;
const tests = [
    {
      name : '',
        comp : <Start />,
        timed : false,
        titled : false
    },
    {
        name : 'Drop Shadow Test',
        comp : <ShadowComponent />,
        timed : true,
        titled : true
    },
    {
        name : 'Translate Test',
        comp : <TranslateComponent />,
        timed : true,
        titled : true
    },
    {
        name : 'Clip Path Test',
        comp : <ClipComponent />,
        timed : true,
        titled : true
    },
    {
        name : 'Clip + Shadow Test',
        comp : <ClipShadowComponent />,
        timed : true,
        titled : true
    },
    {
        name : 'Scale Test',
        comp : <ScaleComponent />,
        timed : true,
        titled : true
    },
    {
        name : 'Clip + Scale Test',
        comp : <ScaleClipComponent />,
        timed : true,
        titled : true
    },
    {
        name : 'Clip + Scale + Shadow Test',
        comp : <ScaleClipShadowComponent />,
        timed : true,
        titled : true
    },
    {
        name : 'Background Test',
        comp : <BackgroundComponent />,
        timed : true,
        titled : true
    },
    {
        name : 'Background + Scale Test',
        comp : <BackgroundScaleComponent />,
        timed : true,
        titled : true
    },
    {
        name : 'Background + Scale + Clip Test',
        comp : <BackgroundClipScaleComponent />,
        timed : true,
        titled : true
    },
    {
        name : 'Background + Scale + Clip + Shadow Test',
        comp : <BackgroundClipScaleShadowComponent />,
        timed : true,
        titled : true
    },
    {
        name : 'Rotate Test',
        comp : <RotateComponent />,
        timed : true,
        titled : true
    },
    {
        name : 'Rotate + Scale Test',
        comp : <RotateScaleComponent />,
        timed : true,
        titled : true
    },
    {
        name : 'Rotate + Scale + Clip Test',
        comp : <RotateScaleClipComponent />,
        timed : true,
        titled : true
    },
    {
        name : 'Rotate + Scale + Clip + Shadow Test',
        comp : <RotateScaleClipShadowComponent />,
        timed : true,
        titled : true
    },
    {
        name : 'Rotate + Scale + Clip + Shadow + Background Test',
        comp : <RotateScaleClipShadowBackgroundComponent />,
        timed : true,
        titled : true
    },
    {
        name : '',
        comp : <End />,
        timed : false,
        titled : false
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

        return (
            <div>
                <div className='header'>
                    <span className='title'>Browser Benchmark</span>
                    {tests[t].titled ?
                        <span className='subtitle'>{t + '. ' + tests[t].name}</span> :
                        ''
                    }
                </div>

                {tests[t].comp}

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
