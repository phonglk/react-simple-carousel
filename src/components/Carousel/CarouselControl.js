import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CarouselControl extends PureComponent {
  static propTypes = {
    enablePrev: PropTypes.bool,
    enableNext: PropTypes.bool,
  }
  static defaultProps = {
    enablePrev: true,
    enableNext: true,
  }
  static contextTypes = {
    navigate: PropTypes.func,
  }
  handlePrevClick = (e) => {
    e.preventDefault();
    if (!this.props.enablePrev) return;
    this.context.navigate('prev');
  }
  handleNextClick = (e) => {
    e.preventDefault();
    if (!this.props.enableNext) return;
    this.context.navigate('next');
  }
  render() {
    const { src, enableNext, enablePrev } = this.props;
    const style = {
      backgroundImage: `url(${src})`,
    }
    const classNames = {
      arrowLeft: ['carousel-control__arrow-wrapper_left'],
      arrowRight: ['carousel-control__arrow-wrapper_right'],
    }
    if (!enableNext) classNames.arrowRight.push('carousel-control__arrow-wrapper_disabled')
    if (!enablePrev) classNames.arrowLeft.push('carousel-control__arrow-wrapper_disabled')
    return (
      <div className="carousel-control">
        <a href="#previous" className={classNames.arrowLeft.join(' ')} onClick={this.handlePrevClick}>
          <div className="carousel-control__arrow_left" />
        </a>
        <a href="#next"  className={classNames.arrowRight.join(' ')} onClick={this.handleNextClick}>
          <div className="carousel-control__arrow_right" />
        </a>
      </div>
    );
  }
}
