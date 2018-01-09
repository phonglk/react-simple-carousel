import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CarouselCaption extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
  }
  static defaultProps = {
    style: {},
  }
  render() {
    const { children, style } = this.props;
    return (
      <div className="carousel-caption" style={style}>
        {children}
      </div>
    );
  }
}
