import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CarouselImage extends PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired,
  }
  render() {
    const { src } = this.props;
    const style = {
      backgroundImage: `url(${src})`,
    }
    return (
      <div className="carousel-image" style={style} />
    );
  }
}
