import React, { Component } from 'react';
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import Result from './components/Result';
import SizeSetting from './components/SizeSetting';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// require('jquery');

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'color': 'red',
            'fontSize': 14
        };

        this.onSetColor = this.onSetColor.bind(this);
        this.onChangeSize = this.onChangeSize.bind(this);
        this.onSettingDefault = this.onSettingDefault.bind(this); 
    }

    onSetColor(pram) {
        this.setState({
            'color' : pram
        });
    }

    onChangeSize(value) { 
        this.setState({
            'fontSize' : ((this.state.fontSize + value) >= 8 && (this.state.fontSize) + value <= 36) ? (this.state.fontSize + value) : (this.state.fontSize)
        }); 
    }

    onSettingDefault(value) {
        console.log(value);
        if(value){
            this.setState = ({
                'color': 'red',
                'fontSize': 14
            });
        }
    }

    render() {
        return (
            <div className="App">
                <div className='container mt-50'>
                    <div className='row'>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <SizeSetting fontSize={this.state.fontSize} onChangeSize={this.onChangeSize} />
                            <Reset onSettingDefault={this.onSettingDefault}/>
                        </div>
                        <Result color={this.state.color} fontSize={this.state.fontSize} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
