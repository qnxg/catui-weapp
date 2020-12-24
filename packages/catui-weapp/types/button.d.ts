import { ComponentClass } from 'react';

export interface CatButtonProps extends TaroButtonProps {
  size?: string;
}

declare const CatButton: ComponentClass<CatButtonProps>;

export default CatButton;
