import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './app.scss';

class App extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  // this.props.children 是将要会渲染的页面
  render(): React.ReactNode {
    return this.props.children;
  }
}

export default App;
