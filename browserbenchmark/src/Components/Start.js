import React, {Component} from 'react';
import {testDB} from "../testDataSrc";
import {testLength} from "./MainComponent";

export class Start extends Component {

    state = {
        doSingle : false,
        doMulti : true,
        doBlock : false,
        doImg : true,
        doNoClip : false,
        doClip : true,
        shaking : ''
    };

    constructor(props, context) {
        super(props, context);

        this.toggleSingle = this.toggleSingle.bind(this);
        this.toggleMulti = this.toggleMulti.bind(this);
        this.toggleBlock = this.toggleBlock.bind(this);
        this.toggleImg = this.toggleImg.bind(this);
        this.resetShake = this.resetShake.bind(this);

    }

    toggleSingle = event => {
        if (this.state.doMulti) {
            this.setState({
                doSingle: !this.state.doSingle
            })
        } else {
            this.setState({
                shaking: 'multi'
            });
        }
        this.callReset();
    };

    toggleMulti = event => {
        if (this.state.doSingle) {
            this.setState({
                doMulti: !this.state.doMulti
            })
        } else {
            this.setState({
                shaking: 'single'
            });
        }
        this.callReset();
    };

    toggleBlock = event => {
        if (this.state.doImg) {
            this.setState({
                doBlock: !this.state.doBlock
            })
        } else {
            this.setState({
                shaking: 'img'
            });
        }
        this.callReset();
    };

    toggleImg = event => {
        if (this.state.doBlock) {
            this.setState({
                doImg: !this.state.doImg
            })
        } else {
            this.setState({
                shaking: 'block'
            });
        }
        this.callReset();
    };

    toggleNoClip = event => {
        if (this.state.doClip) {
            this.setState({
                doNoClip: !this.state.doNoClip
            })
        } else {
            this.setState({
                shaking: 'clip'
            });
        }
        this.callReset();
    };

    toggleClip = event => {
        if (this.state.doNoClip) {
            this.setState({
                doClip: !this.state.doClip
            })
        } else {
            this.setState({
                shaking: 'noclip'
            });
        }
        this.callReset();
    };

    callReset() {
        setTimeout(this.resetShake,500)
    }

    resetShake() {
        const {doSingle, doMulti, doBlock, doImg, doClip, doNoClip} = this.state;
        window.mainComponent.changeParameters(doSingle, doMulti, doBlock, doImg, doClip, doNoClip);

        this.setState({
          shaking: ''
        })
    }

    fetchTotalTests() {
        const {doSingle, doMulti, doBlock, doImg, doClip, doNoClip} = this.state;
        let c = 0;
        for (let i = 0; i < testDB.length; i++) {

            if (!testDB[i].isTest)
                continue;

            const {testData} = testDB[i];

            if (testData.doMulti && !doMulti)
                continue;

            if (!testData.doMulti && !doSingle)
                continue;

            if (testData.doCat && !doImg)
                continue;

            if (!testData.doCat && !doBlock)
                continue;

            if (testData.doClip && !doClip)
                continue;

            if (!testData.doClip && !doNoClip)
                continue;

            c++;
        }

        return c;
    }

    action = event => {
        event.preventDefault();
        window.mainComponent.startTests();
    };

    render() {
        const {doSingle, doMulti, doBlock, doImg, shaking, doClip, doNoClip} = this.state;
        const total = this.fetchTotalTests();
        const duration = total * testLength;
        const durationM = Math.floor( duration / 60);
        const durationS = duration % 60;

        return (
            <div className="test column">

                <div className={'option '+(shaking === 'single'? ' shake' : '')}>
                    <span>Single object?</span>
                    <div onClick={this.toggleSingle} className={'toggle '+ (doSingle? 'enabled' : 'disabled')}>
                        <div className='switch'>
                        </div>
                    </div>
                </div>

                <div className={'option '+(shaking === 'multi'? ' shake' : '')}>
                    <span>Multiple objects?</span>
                    <div onClick={this.toggleMulti} className={'toggle '+ (doMulti? 'enabled' : 'disabled')}>
                        <div className='switch'>
                        </div>
                    </div>
                </div>

                <div className={'option '+(shaking === 'block'? ' shake' : '')}>
                    <span>Block object?</span>
                    <div onClick={this.toggleBlock} className={'toggle '+ (doBlock? 'enabled' : 'disabled')}>
                        <div className='switch'>
                        </div>
                    </div>
                </div>

                <div className={'option '+(shaking === 'img'? ' shake' : '')}>
                    <span>Image object?</span>
                    <div onClick={this.toggleImg} className={'toggle '+ (doImg? 'enabled' : 'disabled')}>
                        <div className='switch'>
                        </div>
                    </div>
                </div>

                <div className={'option '+(shaking === 'noclip'? ' shake' : '')}>
                    <span>No clipped object?</span>
                    <div onClick={this.toggleNoClip} className={'toggle '+ (doNoClip? 'enabled' : 'disabled')}>
                        <div className='switch'>
                        </div>
                    </div>
                </div>

                <div className={'option '+(shaking === 'clip'? ' shake' : '')}>
                    <span>Clipped object?</span>
                    <div onClick={this.toggleClip} className={'toggle '+ (doClip? 'enabled' : 'disabled')}>
                        <div className='switch'>
                        </div>
                    </div>
                </div>

                <div className={'option'}>
                    <span>Total tests:</span>
                    <span>{total}</span>
                </div>

                <div className={'option'}>
                    <span>Benchmark Duration</span>
                    <span>{durationM + ':'+(durationS<10? '0'+durationS : durationS)}</span>
                </div>


                <div onClick={this.action} className="btn">
                    Start
                </div>
            </div>
        );
    }
}
