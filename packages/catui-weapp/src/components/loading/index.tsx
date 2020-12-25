import React, { Component } from 'react';
import { View } from '@tarojs/components';
import classNames from 'classnames';
import { addUnit } from '../../utils';

import { CatLoadingProps } from '../../../types/loading';

export default class CatButton extends Component<CatLoadingProps> {
  render(): JSX.Element {
    const {
      customStyle = '',
      type = 'circular',
      vertical = false,
      color,
      size,
      textSize
    } = this.props;

    const rootClass = classNames(
      'cat-loading',
      {
        'cat-loadng--vertical': vertical
      },
      this.props.className
    );

    let spinner: null | JSX.Element[] = null;
    if (type === 'spinner') {
      spinner = Array(12).map((item, index) => {
        return <View key={`${item}-${index}`} className='cat-loading__dot' />;
      });
    }

    return (
      <View style={customStyle} className={rootClass}>
        <View
          className={`cat-loading__spinner cat-loading__spinner--${type}`}
          style={{
            color: color,
            width: addUnit(size),
            height: addUnit(size)
          }}
        >
          {spinner}
        </View>
        <View
          className='cat-loading__text'
          style={{
            fontSize: addUnit(textSize)
          }}
        >
          {this.props.children}
        </View>
      </View>
    );
  }
}
