import React from 'react';
import { View } from '@tarojs/components';
import { CatLoading } from 'catui-weapp';

import ShowArea from '../../components/showArea';

import 'catui-weapp/dist/style/components/loading.scss';

const Index: React.FC = () => {
  return (
    <View>
      <ShowArea title='加载类型' padding>
        <CatLoading />
        <CatLoading type='spinner' />
      </ShowArea>

      <ShowArea title='自定义颜色' padding>
        <CatLoading color='#1989fa' />
        <CatLoading color='#1989fa' type='spinner' />
      </ShowArea>

      <ShowArea title='加载文案' padding>
        <CatLoading type='spinner'>加载中...</CatLoading>
      </ShowArea>

      <ShowArea title='加载类型' padding>
        <CatLoading type='spinner' vertical>
          加载中...
        </CatLoading>
      </ShowArea>
    </View>
  );
};

export default Index;
