import './dev.scss';
import ReactUploadWeiboMedia from './main';
import tokenJson from './token.json';

/*===example start===*/

// install: npm install afeiship/react-upload-weibo-media --save
// import : import ReactUploadWeiboMedia from 'react-upload-weibo-media'

class App extends React.Component{
  state = {
    token: tokenJson.token
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-upload-weibo-media">
        <ReactUploadWeiboMedia token={this.state.token} ref='rc' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
