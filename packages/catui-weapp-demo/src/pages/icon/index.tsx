import React, { useState } from 'react';
import { View } from '@tarojs/components';
import { CatIcon } from 'catui-weapp';

import ShowArea from '../../components/showArea';

import 'catui-weapp/dist/style/components/icon.scss';
import './index.scss';

const Index: React.FC = () => {
  const [loading] = useState(false);
  console.log(loading);
  return (
    <View>
      <ShowArea title='基础用法' padding>
        <CatIcon className='demo-icon' name='chat-o' />
      </ShowArea>
    </View>
  );
};

export default Index;
