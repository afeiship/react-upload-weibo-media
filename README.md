# react-upload-weibo-media
> React upload media.

## installation
```shell
npm install -S @feizheng/react-upload-weibo-media
```

## update
```shell
npm update @feizheng/react-upload-weibo-media
```

## properties
| Name      | Type   | Default           | Description                           |
| --------- | ------ | ----------------- | ------------------------------------- |
| className | string | -                 | The extended className for component. |
| value     | string | -                 | Default value.                        |
| onChange  | func   | noop              | The change handler.                   |
| size      | array  | ['100%', '160px'] | The media(image) size.                |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-upload-weibo-media/dist/style.scss";
  @import "~@feizheng/react-figure/dist/style.scss";

  // customize your styles:
  $react-upload-weibo-media-options: ()
  ```
2. import js
  ```js
  import ReactUploadWeiboMedia from '@feizheng/react-upload-weibo-media';
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

  ```

## documentation
- https://afeiship.github.io/react-upload-weibo-media/
