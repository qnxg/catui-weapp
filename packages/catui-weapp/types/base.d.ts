import { CSSProperties } from 'react';

export interface CatComponent {
  /**
   * 额外的 class 名
   * @default null
   */
  className?: string;

  /**
   * 用户 CSS 属性
   */
  customStyle?: string | CSSProperties;
}
