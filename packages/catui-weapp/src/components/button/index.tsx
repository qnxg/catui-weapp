import React from 'react';
import { Button, View } from '@tarojs/components';
import classNames from 'classnames';
import CatLoading from '../loading';
import CatIcon from '../icon';

import { CatButtonProps } from '../../../types/button';

export default class CatButton extends React.PureComponent<CatButtonProps> {
  render(): JSX.Element {
    const {
      className,
      loading,
      loadingSize,
      loadingType,
      loadingText,
      icon,
      plain,
      children,
      type = 'default',
      size = 'normal'
    } = this.props;

    let mainContent = (
      <React.Fragment>
        <CatLoading
          className='loading-class'
          size={loadingSize}
          type={loadingType}
        />
        {loadingText ? (
          <View className='cat-button__loading-text'>{loadingText}</View>
        ) : null}
      </React.Fragment>
    );

    if (loading !== true) {
      mainContent = (
        <React.Fragment>
          {icon ? (
            <CatIcon
              size='1.2em'
              name={icon}
              className='cat-button__icon'
              custom-style='line-height: inherit;'
            />
          ) : null}

          <View className='cat-button__text'>{children}</View>
        </React.Fragment>
      );
    }

    const rootClass = classNames(
      'cat-button',
      `cat-button--${type}`,
      `cat-button--${size}`,
      { 'cat-button--plain': plain },
      className
    );

    return (
      <React.Fragment>
        <Button
          className={rootClass}
          hoverClass='cat-button--active hover-class'
        >
          {mainContent}
        </Button>
      </React.Fragment>
    );
  }
}
