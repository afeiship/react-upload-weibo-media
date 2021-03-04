# react-upload-weibo-media
> React upload media.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-upload-weibo-media
```

## properties
| Name      | Type   | Required | Default           | Description                           |
| --------- | ------ | -------- | ----------------- | ------------------------------------- |
| className | string | false    | -                 | The extended className for component. |
| value     | string | false    | -                 | Default value.                        |
| onChange  | func   | false    | noop              | The change handler.                   |
| size      | array  | false    | ['100%', '180px'] | The media(image) size.                |
| inputable | bool   | false    | false             | If input control use text diretly.    |


## usage
1. import css
  ```scss
  @import "~@jswork/react-figure/dist/style.scss";
  @import "~@jswork/wsui-frame-wrapper/dist/index.scss";
  @import "~@jswork/react-upload-weibo-media/dist/style.scss";

  // customize your styles:
  $react-upload-weibo-media-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactUploadWeiboMedia from '@jswork/react-upload-weibo-media';
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

  ```

## documentation
- https://afeiship.github.io/react-upload-weibo-media/


## license
Code released under [the MIT license](https://github.com/afeiship/react-upload-weibo-media/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-upload-weibo-media
[version-url]: https://npmjs.org/package/@jswork/react-upload-weibo-media

[license-image]: https://img.shields.io/npm/l/@jswork/react-upload-weibo-media
[license-url]: https://github.com/afeiship/react-upload-weibo-media/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-upload-weibo-media
[size-url]: https://github.com/afeiship/react-upload-weibo-media/blob/master/dist/react-upload-weibo-media.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-upload-weibo-media
[download-url]: https://www.npmjs.com/package/@jswork/react-upload-weibo-media
