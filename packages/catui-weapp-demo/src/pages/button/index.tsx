import React from 'react';
import { View } from '@tarojs/components';
import { CatButton } from 'catui-weapp';

import ShowArea from '../../components/showArea';

import 'catui-weapp/dist/style/components/button.scss';
import './index.scss';

const Index: React.FC = () => {
  return (
    <View className='demo-button'>
      <ShowArea title='按钮类型' padding>
        {/* <Button>ff</Button> */}
        <CatButton>4545</CatButton>
      </ShowArea>
    </View>
  );
};

export default Index;
