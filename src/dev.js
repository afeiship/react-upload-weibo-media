import './dev.scss';
import ReactUploadWeiboMedia from './main';
import tokenJson from './token.json';

/*===example start===*/

// install: npm install afeiship/react-upload-weibo-media --save
// import : import ReactUploadWeiboMedia from 'react-upload-weibo-media'

class App extends React.Component {
  state = {
    token: tokenJson.token,
    value: 'http://placeholder.qiniudn.com/800x80'
  };

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = inEvent => {
    console.log(inEvent);
  };

  render() {
    return (
      <div className="hello-react-upload-weibo-media">
        <ReactUploadWeiboMedia onChange={this._onChange} value={this.state.value} token={this.state.token} ref='rc' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
