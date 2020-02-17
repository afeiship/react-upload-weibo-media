import ReactUploadWeiboMedia from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import tokenJson from '../.token.json';
import './assets/style.scss';

class App extends React.Component {
  state = {
    token: tokenJson.token,
    value: ''
  };

  _onChange = (inEvent) => {
    console.log(inEvent);
  };

  render() {
    return (
      <div className="app-container">
        <ReactUploadWeiboMedia
          onChange={this._onChange}
          value={this.state.value}
          token={this.state.token}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
