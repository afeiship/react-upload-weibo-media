import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactUploadWeiboMedia from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  state = {
    token:
      'SUB=_2A25NRDndDeRhGeVI7VMZ8yzEyz-IHXVuMCwVrDV_PUNbm9AfLVX9kW9NTBpP0WiKCSBlMw7oSMG7Zy0nrMofP6ea',
    value: ''
  };

  _onChange = (inEvent) => {
    console.log(inEvent);
  };

  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-upload-weibo-media">
        <ReactUploadWeiboMedia
          onChange={this._onChange}
          value={this.state.value}
          token={this.state.token}
        />
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
