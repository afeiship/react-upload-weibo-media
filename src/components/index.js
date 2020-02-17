import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import ReactUploadWeibo from '@feizheng/react-upload-weibo';
import ReactFigure from '@feizheng/react-figure';

const CLASS_NAME = 'react-upload-weibo-media';

export default class ReactUploadWeiboMedia extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * Default value.
     */
    value: PropTypes.string,
    /**
     * The change handler.
     */
    onChange: PropTypes.func,
    /**
     * The media(image) size.
     */
    size: PropTypes.array
  };

  static defaultProps = {
    onChange: noop,
    size: ['100%', '160px']
  };

  constructor(inProps) {
    super(inProps);
    const { value } = inProps;
    this.state = {
      value
    };
  }

  shouldComponentUpdate(inProps) {
    const { value } = inProps;
    if (value !== this.state.value) {
      this.setState({ value });
    }
    return true;
  }

  handleChange = (inEvent) => {
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
      <div
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        <ReactUploadWeibo
          token={token}
          onChange={this.handleChange}
          className={`${CLASS_NAME}__uploader`}
        />
        <ReactFigure
          className={classNames(`${CLASS_NAME}__image`, { bgn: !!_value })}
          style={{ width: size[0], height: size[1] || size[0] }}
          data-object-fit="contain">
          {_value && <img src={_value} />}
        </ReactFigure>
      </div>
    );
  }
}
