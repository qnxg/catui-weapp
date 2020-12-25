import React, { FC } from 'react';
import { View } from '@tarojs/components';

import './index.scss';

interface Props {
  title: string;
  padding?: boolean;
}

const Index: FC<Props> = ({ title, padding, children }) => {
  return (
    <View className={`demo-block ${padding ? 'demo-block--padding' : ''}`}>
      <View className='demo-block__title'>{title}</View>
      <View className='demo-block__card'>{children}</View>
    </View>
  );
};

export default Index;
