import React from 'react';
import { View } from '@tarojs/components';
import { CatLoading } from 'catui-weapp';

import 'catui-weapp/dist/style/components/loading.scss';

const Index: React.FC = () => {
  return (
    <View>
      <View>
        <CatLoading>加载中...</CatLoading>
      </View>

      <View>
        <CatLoading vertical={true}>加载中...</CatLoading>
      </View>

      <View>
        <CatLoading color='red' vertical={true}>
          加载中...
        </CatLoading>
      </View>

      <View>
        <CatLoading color='red' vertical={true} type='spinner'>
          加载中...
        </CatLoading>
      </View>
    </View>
  );
};

export default Index;
