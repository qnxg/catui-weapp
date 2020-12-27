import React from 'react';
import { View, Image } from '@tarojs/components';
import classNames from 'classnames';
import CatInfo from '../info';

import { addUnit } from '../../utils';
import { CatIconProps } from '../../../types/icon';

export default class CatIcon extends React.PureComponent<CatIconProps> {
  get isImage(): boolean {
    return this.props.name.indexOf('/') !== -1;
  }

  get rootClass(): string {
    const { name, className } = this.props;

    return classNames(
      'cat-icon',
      !this.isImage ? `cat-icon-${name}` : 'cat-icon--image',
      className
    );
  }

  get rootStyle(): string | React.CSSProperties {
    const { customStyle, color, size } = this.props;

    if (typeof customStyle === 'string') {
      return [
        customStyle,
        `color: ${color}`,
        `font-size: ${addUnit(size)}`
      ].join(';');
    }

    if (typeof customStyle === 'undefined') {
      return { color: color, fontSize: size };
    }

    return { ...customStyle, color: color, fontSize: size };
  }

  render(): JSX.Element {
    const { onClick, info, dot, name } = this.props;

    return (
      <View style={this.rootStyle} onClick={onClick} className={this.rootClass}>
        {info || dot ? (
          <CatInfo dot={dot} info={'' + info} className='cat-icon__info' />
        ) : null}
        {this.isImage ? (
          <Image src={name} mode='aspectFit' className='cat-icon__image' />
        ) : null}
      </View>
    );
  }
}
