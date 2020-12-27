import React from 'react';
import { View } from '@tarojs/components';
import classNames from 'classnames';

import { CatInfoProps } from '../../../types/info';

const CatInfo: React.FC<CatInfoProps> = ({
  dot,
  info,
  className,
  customStyle
}) => {
  const rootClass = classNames('cat-info', { 'cat-info--dot': dot }, className);

  return (
    <React.Fragment>
      {(info && info !== '') || dot ? (
        <View className={rootClass} style={customStyle}>
          {dot ? '' : info}
        </View>
      ) : null}
    </React.Fragment>
  );
};

export default CatInfo;
