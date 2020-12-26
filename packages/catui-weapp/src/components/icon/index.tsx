import React from 'react';
import { View, Image } from '@tarojs/components';
import classNames from 'classnames';
import CatInfo from '../info';

import { addUnit } from '../../utils';
import { CatIconProps } from '../../../types/icon';

const CatIcon: React.FC<CatIconProps> = ({
  customStyle,
  className,
  name,
  dot,
  info,
  color,
  size,
  onClick
}) => {
  const isImage = name.indexOf('/') !== -1;

  const rootClass = classNames(
    'cat-icon',
    !isImage ? `cat-icon-${name}` : 'cat-icon--image',
    className
  );

  const rootStyle = (() => {
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
  })();

  return (
    <View style={rootStyle} onClick={onClick} className={rootClass}>
      {info || dot ? (
        <CatInfo dot={dot} info={'' + info} className='cat-icon__info' />
      ) : null}
      {isImage ? (
        <Image src={name} mode='aspectFit' className='cat-icon__image' />
      ) : null}
    </View>
  );
};

export default CatIcon;
