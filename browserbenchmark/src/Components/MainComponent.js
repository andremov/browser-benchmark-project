import React, {Component} from 'react';
import {Start} from "./Start";
import {DropShadowComponent} from "./TestComponents/DropShadowComponent";
import {End} from "./End";
import {TranslateComponent} from "./TestComponents/TranslateComponent";
import {ClipComponent} from "./TestComponents/ClipComponent";
import {ClipShadowComponent} from "./TestComponents/ClipShadowComponent";
export const defTimer = 2000;
export const testAttempts = 3;

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
        comp : <DropShadowComponent />,
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
        name : 'Clip + Drop Shadow Path Test',
        comp : <ClipShadowComponent />,
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
