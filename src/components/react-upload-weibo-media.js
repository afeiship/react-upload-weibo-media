import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import ReactUploadWeibo from 'react-upload-weibo';
import ReactFigure from 'react-figure';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.object,
    onChange: PropTypes.func,
    size: PropTypes.array
  };

  static defaultProps = {
    value: null,
    onChange: noop,
    size: ['100%', '160px']
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    const { value } = inProps;
    this.state = {
      value
    };
  }

  componentWillReceiveProps(inProps) {
    const { value } = inProps;
    if (value !== this.state.value) {
      this.setState({ value });
      //onchange?
    }
  }

  _onChange = inEvent => {
    const { value } = inEvent.target;
    const { onChange } = this.props;
    const url = value[0].url;
    const target = { value: url };
    this.setState(target, () => {
      onChange({ target });
    });
  };

  render() {
    const { className, token, value, size, onChange, ...props } = this.props;
    const _value = this.state.value;

    return (
      <div className={classNames('react-upload-weibo-media', className)} {...props}>
        <ReactUploadWeibo token={token} onChange={this._onChange} />
        <ReactFigure className={classNames('react-upload-weibo-media-img', { 'bgn': !!_value })} style={{ width: size[0], height: size[1] || size[0] }}>
          {_value && <img src={_value} />}
        </ReactFigure>
      </div>
    );
  }
}
