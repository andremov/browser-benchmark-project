import React, {Component} from 'react';
import {Start} from "./Start";
import {DropShadowComponent} from "./TestComponents/DropShadowComponent";
import {End} from "./End";
import {TranslateComponent} from "./TestComponents/TranslateComponent";
export const defTimer = 2500;

const testLength = 15;
const tests = [
    {
      name : ''
    },
    {
        name : 'Drop Shadow Test',
    },
    {
        name : 'TranslateComponent Test',
    },
    {
        name : ''
    }
];

export class MainComponent extends Component {

    state = {
        currentTest : 0,
        progress : 0
    };

    componentDidMount() {
        setInterval(this.handleProgress,1000)
    }

    handleProgress = () => {
        let p = this.state.progress;
        let t = this.state.currentTest;
        if (t !== 0 && t !== tests.length-1) {
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

    firstTest = () => {
        let t = this.state.currentTest;
        this.setState({
            progress : 0,
            currentTest : t+1
        });
    };

    restart = () => {
        this.setState({
            progress : 0,
            currentTest : 0
        });
    };

    render() {
        const {progress : p, currentTest : t} = this.state;

        return (
            <div>
                <div className='header'>
                    <span className='title'>Browser Benchmark</span>
                    {t !== 0 && t !== tests.length-1 ?
                        <span className='subtitle'>{t + '. ' + tests[t].name}</span> :
                        ''
                    }
                </div>

                {
                    t === 0 ? <Start doStart={this.firstTest}/> :
                        t === 1 ? <DropShadowComponent /> :
                            t === 2 ? <TranslateComponent /> :
                            <End doEnd={this.restart}/>
                }

                <div className='bar' style={{"width" : (((p/testLength)*100)+'%')}}>
                    <div className='progress'>
                    </div>
                </div>
            </div>
        );
    }
}
