import { ComponentClass } from 'react';
import { CatComponent } from './base';

export interface CatLoadingProps extends CatComponent {
  color?: string;

  type?: 'circular' | 'spinner';

  size?: number | string;

  textSize?: number | string;

  vertical?: boolean;
}

declare const CatLoading: ComponentClass<CatLoadingProps>;

export default CatLoading;
