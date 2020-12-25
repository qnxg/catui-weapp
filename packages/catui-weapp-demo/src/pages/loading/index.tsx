import React, { Component } from 'react';
import { View } from '@tarojs/components';
import { CatLoading } from 'catui-weapp';

import 'catui-weapp/dist/style/components/loading.scss';

export default class Index extends Component {
  render(): JSX.Element {
    return (
      <View className='index'>
        <CatLoading />
      </View>
    );
  }
}
