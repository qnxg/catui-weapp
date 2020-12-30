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
        <CatButton type='default' className='demo-button-margin'>
          默认按钮
        </CatButton>
        <CatButton type='primary' className='demo-button-margin'>
          主要按钮
        </CatButton>
        <CatButton type='info' className='demo-button-margin'>
          信息按钮
        </CatButton>
        <CatButton type='warning' className='demo-button-margin'>
          警告按钮
        </CatButton>
        <CatButton type='danger' className='demo-button-margin'>
          危险按钮
        </CatButton>
      </ShowArea>

      <ShowArea title='描边按钮' padding>
        <CatButton type='default' className='demo-button-margin' plain>
          默认按钮
        </CatButton>
        <CatButton type='primary' className='demo-button-margin' plain>
          主要按钮
        </CatButton>
        <CatButton type='info' className='demo-button-margin' plain>
          信息按钮
        </CatButton>
        <CatButton type='warning' className='demo-button-margin' plain>
          警告按钮
        </CatButton>
        <CatButton type='danger' className='demo-button-margin' plain>
          危险按钮
        </CatButton>
      </ShowArea>

      <ShowArea title='按钮尺寸' padding>
        <CatButton type='primary' size='large'>
          大号按钮
        </CatButton>
        <CatButton type='primary' className='demo-button-margin'>
          普通按钮
        </CatButton>
        <CatButton type='primary' size='small' className='demo-button-margin'>
          小型按钮
        </CatButton>
        <CatButton type='primary' size='mini' className='demo-button-margin'>
          迷你按钮
        </CatButton>
      </ShowArea>
    </View>
  );
};

export default Index;
