import { FC } from 'react';
import { CatComponent } from './base';

export interface CatLoadingProps extends CatComponent {
  /**
   * loading 颜色
   * @default  #c8c9cc
   */
  color?: string;

  /**
   * loading 类型
   * @default circular
   */
  type?: 'circular' | 'spinner';

  /**
   * loading 大小
   * @default 30px
   */
  size?: number | string;

  /**
   * 文字大小
   * @default 14px
   */
  textSize?: number | string;

  /**
   * 是否垂直排列图标和文字内容
   * @default false
   */
  vertical?: boolean;
}

declare const CatLoading: FC<CatLoadingProps>;

export default CatLoading;
