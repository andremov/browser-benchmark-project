import React, {Component} from 'react';
import {Start} from "./Start";
import {DropShadowTestComponent} from "./DropShadowTestComponent";

const tests = [
    {
      name : ''
    },
    {
        name : 'Drop Shadow Test',
    },
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
        if (t !== 0) {
            if (p === 100) {
                t++;
                p = 0;
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
            currentTest : t+1
        });
    };

    render() {
        const {progress : p, currentTest : t} = this.state;

        return (
            <div>
                <div className='header'>
                    <span className='title'>Browser Benchmark</span>
                    {t !== 0 ?
                        <span className='subtitle'>{t + '. ' + tests[t].name}</span> :
                        ''
                    }
                </div>

                {
                    t === 0 ? <Start doStart={this.firstTest}/> :
                        t === 1 ? <DropShadowTestComponent /> :
                            <Start />
                }

                <div className='bar' style={{"width" : (((p/30)*100)+'%')}}>
                    <div className='progress'>
                    </div>
                </div>
            </div>
        );
    }
}
