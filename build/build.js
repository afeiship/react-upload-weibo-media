import baseConfig from '.';
import merge from 'webpack-merge';
import {
  configs,
  inputs,
  outputs,
  loaders,
  plugins,
  externals
} from '@feizheng/webpack-lib-kits';

export default merge(baseConfig, {
  entry: inputs.build(),
  output: outputs.build({
    library: 'ReactUploadWeiboMedia'
  }),
  externals: externals.base({
    '@feizheng/noop': '@feizheng/noop',
    '@feizheng/react-figure': '@feizheng/react-figure',
    '@feizheng/react-upload-weibo': '@feizheng/react-upload-weibo',
    '@feizheng/react-checkbox': '@feizheng/react-checkbox',
    '@feizheng/react-input': '@feizheng/react-input',
    '@feizheng/react-if-else': '@feizheng/react-if-else',
  }),
  plugins: [plugins.clean(), plugins.copyStyles()]
});
