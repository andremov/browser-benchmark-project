import React, {Component} from 'react';

export class End extends Component {

    state = {
        fpsCSV : '',
        memCSV : '',
        msCSV : '',
        received : false
    };

    restartTests = event => {
        event.preventDefault();

        window.mainComponent.setTestNumber(0);
    };


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.sendResults.received && !this.state.received) {
            const {fps,mem,ms,received} = this.props.sendResults;
            let fpsCSV = 'fps, ';
            let memCSV = 'mem, ';
            let msCSV = 'ms, ';

            fpsCSV = fpsCSV + 'limit, ' + fps[0].limit + '\n';
            memCSV = memCSV + 'limit, ' + mem[0].limit + '\n';
            msCSV = msCSV + 'limit, ' + ms[0].limit + '\n';

            for (let i = 0; i < fps.length; i++) {
                fpsCSV = fpsCSV + fps[i].current + '\n';
            }

            for (let i = 0; i < mem.length; i++) {
                memCSV = memCSV + mem[i].current + '\n';
            }

            for (let i = 0; i < ms.length; i++) {
                msCSV = msCSV + ms[i].current + '\n';
            }

            this.setState({fpsCSV,memCSV,msCSV,received});
        }
    }

    downloadResults = () => {
        let element = document.createElement("a");
        let file = new Blob([this.state.fpsCSV], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "FPS-Results.csv";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();


        file = new Blob([this.state.memCSV], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "MEM-Results.csv";
        element.click();


        file = new Blob([this.state.msCSV], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "MS-Results.csv";
        element.click();
    };

    render() {
        return (
            <div className="test column">
                Finished.

                <div onClick={this.downloadResults} className="large-btn">
                    Download Results
                </div>

                <div onClick={this.restartTests} className="btn">
                    Back
                </div>
            </div>
        );
    }
}
