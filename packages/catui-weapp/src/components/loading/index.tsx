import React, { Component } from 'react';
import { View } from '@tarojs/components';
import classNames from 'classnames';

import { CatButtonProps } from '../../../types/button';

export default class CatButton extends Component<CatButtonProps> {
  render(): JSX.Element {
    const { customStyle = '' } = this.props;

    const rootClass = classNames('cat-loading', this.props.className);

    return (
      <View style={customStyle} className={rootClass}>
        ffsfsd
        <View>
          <View />
        </View>
        <View></View>
      </View>
    );
  }
}
