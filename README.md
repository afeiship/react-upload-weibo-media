# react-upload-weibo-media
> React upload media for weibo

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    size: PropTypes.array
  };

  static defaultProps = {
    onChange: noop,
    size: ['100%', '160px']
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-upload-weibo-media --registry=https://registry.npm.taobao.org
```

```js
import ReactUploadWeiboMedia from 'react-upload-weibo-media';
```

```scss
// customize your styles:
$react-upload-weibo-media-options:(
);

@import 'node_modules/react-upload-weibo-media/dist/style.scss';
```


## usage:
```jsx

// install: npm install afeiship/react-upload-weibo-media --save
// import : import ReactUploadWeiboMedia from 'react-upload-weibo-media'

class App extends React.Component {
  state = {
    token: tokenJson.token,
    value: 'http://placeholder.qiniudn.com/80x80'
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

```


## snapshot:
![](https://ws3.sinaimg.cn/large/0069RVTdgy1fuzkehe8a0j30o20cmq4k.jpg)
