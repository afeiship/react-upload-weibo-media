import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@jswork/noop';
import ReactUploadWeibo from '@jswork/react-upload-weibo';
import ReactFigure from '@jswork/react-figure';
import ReactCheckbox from '@jswork/react-checkbox';
import ReactInput from '@jswork/react-input';
import ReactIfElse from '@jswork/react-if-else';

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
    size: PropTypes.array,
    /**
     * If input control use text diretly.
     */
    inputable: PropTypes.bool
  };

  static defaultProps = {
    onChange: noop,
    size: ['100%', '180px'],
    inputable: false
  };

  constructor(inProps) {
    super(inProps);
    const { value, inputable } = inProps;
    this.state = {
      value,
      inputable
    };
  }

  shouldComponentUpdate(inProps) {
    const { value } = inProps;
    if (value && value !== this.state.value) {
      this.setState({ value });
    }
    return true;
  }

  handleCheckbox = (inEvent) => {
    const { value } = inEvent.target;
    this.setState({ inputable: value });
  };

  handleChange = (inEvent) => {
    const { value } = inEvent.target;
    const url = value[0].url;
    this.change(url);
  };

  handleInputChange = (inEvent) => {
    const { value } = inEvent.target;
    this.change(value);
  };

  change(inValue) {
    const { onChange } = this.props;
    const target = { value: inValue };
    this.setState(target, () => {
      onChange({ target });
    });
  }

  render() {
    const {
      className,
      token,
      value,
      inputable,
      size,
      onChange,
      ...props
    } = this.props;
    const _value = this.state.value;
    const _inputable = this.state.inputable;

    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        <div className={`${CLASS_NAME}__input`}>
          <ReactCheckbox
            className="is-action"
            value={_inputable}
            onChange={this.handleCheckbox}
          />
          <ReactIfElse value={_inputable} className="is-form-control">
            <ReactInput
              placeholder="你也可以在这里输入地址..."
              value={_value}
              className={`${CLASS_NAME}__text`}
              onChange={this.handleInputChange}
            />
            <ReactUploadWeibo
              token={token}
              onChange={this.handleChange}
              className={`${CLASS_NAME}__uploader`}
            />
          </ReactIfElse>
        </div>
        <ReactFigure
          className={classNames(`${CLASS_NAME}__image`, {
            bgn: !!_value
          })}
          style={{ width: size[0], height: size[1] || size[0] }}
          data-object-fit="contain">
          {_value && <img src={_value} />}
        </ReactFigure>
      </div>
    );
  }
}
