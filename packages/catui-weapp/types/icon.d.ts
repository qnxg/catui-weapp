import { ComponentClass } from 'react';
import { CatComponent } from './base';

export interface CatIconProps extends CatComponent {
  /**
   * 图标名称或图片链接
   */
  name: string;

  /**
   * 是否显示图标右上角小红点
   * @default false
   */
  dot?: boolean;

  /**
   * 图标右上角文字提示
   */
  info?: string | number;

  /**
   * 图标颜色
   */
  color?: string;

  /**
   * 图标大小，如 20px，2em，默认单位为px
   */
  size?: string | number;

  /**
   * 点击图标时触发
   */
  onClick?: () => void;
}

declare const CatIcon: ComponentClass<CatIconProps>;

export default CatIcon;
