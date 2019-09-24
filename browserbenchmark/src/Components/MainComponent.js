import React, {Component} from 'react';
import {TestComponent} from "./TestComponent";
import {testDB} from "../testDataSrc";

export const defTimer = 2000;
export const testAttempts = 3;

const skip = 1;
const testLength = 15;

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
        if (testDB[t].timed) {
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
        const {testData} = testDB[t];

        return (
            <div>
                <div className='header'>
                    <span className='title'>Browser Benchmark</span>
                    {testDB[t].titled ?
                        <span className='subtitle'>{t + '. ' + testDB[t].name}</span> :
                        ''
                    }
                </div>
                { testDB[t].isTest ?
                    <TestComponent testData={testData} testNum={t}/>
                    :
                    testDB[t].comp
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
