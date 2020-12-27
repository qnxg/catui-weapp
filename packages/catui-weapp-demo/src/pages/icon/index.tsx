import React from 'react';
import { View } from '@tarojs/components';
import { CatIcon } from 'catui-weapp';

import ShowArea from '../../components/showArea';

import 'catui-weapp/dist/style/components/icon.scss';
import './index.scss';

const Index: React.FC = () => {
  return (
    <View>
      <ShowArea title='基础用法' padding>
        <CatIcon className='demo-icon' name='chat-o' />
        <CatIcon
          className='demo-icon'
          name='https://b.yzcdn.cn/vant/icon-demo-1126.png'
        />
      </ShowArea>
      <ShowArea title='徽标提示' padding>
        <CatIcon className='demo-icon' name='chat-o' dot />
        <CatIcon className='demo-icon' name='chat-o' info='9' />
        <CatIcon className='demo-icon' name='chat-o' info='99+' />
      </ShowArea>
      <ShowArea title='图标颜色' padding>
        <CatIcon className='demo-icon' name='chat-o' color='#1989fa' />
        <CatIcon className='demo-icon' name='chat-o' color='#ee0a24' />
      </ShowArea>

      <ShowArea title='图标大小' padding>
        <CatIcon className='demo-icon' name='chat-o' size={25} />
        <CatIcon className='demo-icon' name='chat-o' size='25px' />
      </ShowArea>
    </View>
  );
};

export default Index;
