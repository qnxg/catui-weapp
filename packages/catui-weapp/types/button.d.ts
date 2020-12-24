import { ComponentClass } from 'react';
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
}

declare const CatButton: ComponentClass<CatButtonProps>;

export default CatButton;
