import { FC } from 'react';
import { CommonEventFunction } from '@tarojs/components';
import { ButtonProps } from '@tarojs/components/types/Button';
import { CatComponent } from './base';

type TaroButtonProps = Pick<
  ButtonProps,
  | 'formType'
  | 'openType'
  | 'lang'
  | 'sessionFrom'
  | 'sendMessageTitle'
  | 'sendMessagePath'
  | 'sendMessageImg'
  | 'showMessageCard'
  | 'appParameter'
  | 'onContact'
  | 'onGetUserInfo'
  | 'onGetPhoneNumber'
  | 'onOpenSetting'
  | 'onError'
>;

export interface CatButtonProps extends CatComponent, TaroButtonProps {
  /**
   * 按钮类型
   * @default default
   */
  type?: 'default' | 'primary' | 'info' | 'warning' | 'danger';

  /**
   * 按钮尺寸
   * @default normal
   */
  size?: 'normal' | 'large' | 'small' | 'mini';

  /**
   * 按钮颜色
   */
  color?: string;

  /**
   * 左侧图标名称或图片链接，可选值见 Icon 组件
   */
  icon?: string;

  /**
   * 是否为空心按钮
   * @default false
   */
  plain?: boolean;

  /**
   * 是否为块级按钮
   * @default false
   */
  block?: boolean;

  /**
   * 是否为圆形按钮
   * @default false
   */
  round?: boolean;

  /**
   * 是否为方形按钮
   * @default false
   */
  square?: boolean;

  /**
   * 是否可用
   * @default false
   */
  disables?: boolean;

  /**
   * 是否显示 loading
   * @default false
   */
  loading?: boolean;

  /**
   * loading 文字
   */
  loadingText?: string;

  /**
   * loading 类型
   * @default circular
   */
  loadingType?: 'circular' | 'spinner';

  /**
   * loading 大小
   * @default 20px
   */
  loadingSize?: string | number;

  /**
   * 点击回调
   */
  onClick?: CommonEventFunction;
}

declare const CatButton: FC<CatButtonProps>;

export default CatButton;
