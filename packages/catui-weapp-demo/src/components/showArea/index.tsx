import React, { FC } from 'react';
import { View } from '@tarojs/components';

interface Props {
  title: string;
}

const Index: FC<Props> = ({ title, children }) => {
  return (
    <View>
      <View>{title}</View>
      {children}
    </View>
  );
};

export default Index;
