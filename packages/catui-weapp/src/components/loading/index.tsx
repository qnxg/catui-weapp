import React from 'react';
import { View } from '@tarojs/components';
import classNames from 'classnames';
import { addUnit } from '../../utils';

import { CatLoadingProps } from '../../../types/loading';

const CatLoading: React.FC<CatLoadingProps> = ({
  customStyle = '',
  type = 'circular',
  vertical = false,
  className,
  color,
  size,
  textSize,
  children
}) => {
  const rootClass = classNames(
    'cat-loading',
    {
      'cat-loading--vertical': vertical
    },
    className
  );

  let spinner: null | JSX.Element[] = null;
  if (type === 'spinner') {
    spinner = Array(12)
      .fill(1)
      .map((item, index) => {
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
        {children}
      </View>
    </View>
  );
};

export default CatLoading;
