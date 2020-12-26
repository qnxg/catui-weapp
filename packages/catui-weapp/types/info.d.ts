import { FC } from 'react';
import { CatComponent } from './base';

export interface CatInfoProps extends CatComponent {
  /**
   * 小红点信息
   * @default ''
   */
  info?: string;

  /**
   * 显示红点还是信息
   * @default false
   */
  dot?: boolean;
}

declare const CatInfo: FC<CatInfoProps>;

export default CatInfo;
