import React, {Component} from 'react';

export class StatsComponent extends Component {

    state = {
        msData : [],
        fpsData : [],
        memData : [],
        lastFrameTime : 0,
        lastUpdateTime : 0,
        frames : 0,
        minMem : 0,
        maxMem : 0,
        sumMem : 0,
        minMs : 0,
        maxMs : 0,
        sumMs : 0,
        minFps : 0,
        maxFps : 0,
        sumFps : 0,
    };

    componentDidMount() {
        this.startMeasuring();
    }

    startMeasuring = () => {
        const now = Date.now();
        this.setState({
            lastFrameTime : now,
            lastUpdateTime : now
        });
        setInterval(this.update,100);
    };

    update = () => {

        let {lastUpdateTime, lastFrameTime, frames } = this.state;
        let {msData, memData, fpsData } = this.state;
        let {
            minMem, maxMem, sumMem, minMs, maxMs, sumMs,minFps,maxFps, sumFps
        } = this.state;

        let currentTime = Date.now();
        frames ++;

        const currentMs =  Math.max(currentTime - lastFrameTime,0);
        sumMs += currentMs;
        if (currentMs < minMs || minMs === 0) {
            minMs = currentMs;
        }
        if (currentMs > maxMs) {
            maxMs = currentMs;
        }

        msData.push({
            current : currentMs,
            limit : 200
        });

        if ( currentTime - lastUpdateTime >= 1000 ) {

            lastUpdateTime = currentTime;


            const currentFps =  (( frames * 1000 ) / ( currentTime - lastFrameTime ));
            sumFps += currentFps;
            if (currentFps < minFps || minFps === 0) {
                minFps = currentFps;
            }
            if (currentFps > maxFps) {
                maxFps = currentFps;
            }

            fpsData.push( {
                current : currentFps,
                limit : 200
            });

            frames = 0;

            const jsMemory = performance.memory;


            const currentMem = (jsMemory.usedJSHeapSize / 1048576);
            sumMem += currentMem;
            if (currentMem < minMem || minMem === 0) {
                minMem = currentMem;
            }
            if (currentMem > maxMem) {
                maxMem = currentMem;
            }

            memData.push({
                current : currentMem,
                limit : (jsMemory.jsHeapSizeLimit / 1048576)
            });
        }

        this.setState({
            lastFrameTime : currentTime,
            msData,
            memData,
            fpsData,
            lastUpdateTime,
            frames,
            minMem, maxMem, sumMem,
            minMs, maxMs, sumMs,
            minFps, maxFps, sumFps
        })
    };

    render() {
        const {memData, msData, fpsData} = this.state;
        const {minMem, maxMem, sumMem} = this.state;
        const {minMs, maxMs, sumMs} = this.state;
        const {minFps, maxFps, sumFps} = this.state;
        
        const places = 3;
        
        console.log(fpsData);

        return (
            <div className='all-graphs'>
                <div className='graph'>

                    <div className='title'>Frames per second</div>

                    <div className='info'>
                        <span>Min: {(minFps).toFixed(places)}frames</span>
                        <span>Avg: {(sumFps/fpsData.length).toFixed(places)}frames</span>
                        <span>Max: {(maxFps).toFixed(places)}frames</span>
                    </div>

                    <div className='plot-area fps'>
                        {fpsData.slice(-100).map (item => { return(
                            <div className='bar' style={{height : (item.current/item.limit)*100+'%'}}>
                            </div>
                        )})}
                    </div>

                </div>
                <div className='graph'>

                    <div className='title'>Memory used</div>

                    <div className='info'>
                        <span>Min: {(minMem).toFixed(places)}MB</span>
                        <span>Avg: {(sumMem/memData.length).toFixed(places)}MB</span>
                        <span>Max: {(maxMem).toFixed(places)}MB</span>
                    </div>

                    <div className='plot-area mem'>
                        {memData.slice(-100).map (item => { return(
                            <div className='bar' style={{height : (item.current/item.limit)*100+'%'}}>
                            </div>
                        )})}
                    </div>

                </div>
                <div className='graph'>

                    <div className='title'>Milliseconds per call</div>

                    <div className='info'>
                        <span>Min: {(minMs).toFixed(places)}ms</span>
                        <span>Avg: {(sumMs/msData.length).toFixed(places)}ms</span>
                        <span>Max: {(maxMs).toFixed(places)}ms</span>
                    </div>

                    <div className='plot-area ms'>
                        {msData.slice(-100).map (item => { return(
                            <div className='bar' style={{height : (item.current/item.limit)*100+'%'}}>
                            </div>
                        )})}
                    </div>

                </div>
            </div>
        );
    }
}
