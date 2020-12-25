import React from 'react';
import { View } from '@tarojs/components';
import { CatLoading } from 'catui-weapp';

import ShowArea from '../../components/showArea';

import 'catui-weapp/dist/style/components/loading.scss';
import './index.scss';

const Index: React.FC = () => {
  return (
    <View>
      <ShowArea title='加载类型' padding>
        <CatLoading className='demo-loading' />
        <CatLoading className='demo-loading' type='spinner' />
      </ShowArea>

      <ShowArea title='自定义颜色' padding>
        <CatLoading className='demo-loading' color='#1989fa' />
        <CatLoading className='demo-loading' color='#1989fa' type='spinner' />
      </ShowArea>

      <ShowArea title='加载文案' padding>
        <CatLoading className='demo-loading' type='spinner' size='24px'>
          加载中...
        </CatLoading>
      </ShowArea>

      <ShowArea title='加载类型' padding>
        <CatLoading
          className='demo-loading'
          type='spinner'
          size='24px'
          vertical
        >
          加载中...
        </CatLoading>
      </ShowArea>
    </View>
  );
};

export default Index;
