import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CarouselIndicator extends PureComponent {
  static propTypes = {
    currentSlide: PropTypes.number,
    slideCount: PropTypes.number,
    enabled: PropTypes.bool,
  }
  static defaultProps = {
    currentSlide: 0,
    slideCount: 5,
    enabled: true,
  }
  static contextTypes = {
    navigate: PropTypes.func,
  }
  handleNavigateClick = (e, i) => {
    e.preventDefault();
    if (!this.props.enabled) return;
    this.context.navigate(i);
  }
  render() {
    const { currentSlide, slideCount } = this.props;

    const indicators = [];
    for(let i = 0; i < slideCount; i++) {
      const classNames = ['carousel-indicator__item']
      if (currentSlide === i) classNames.push('carousel-indicator__item-current')
      indicators.push(
        <a href={`#slide${i+1}`} key={i} className={classNames.join(' ')} onClick={(e) => this.handleNavigateClick(e, i)}>
          <div className="carousel-indicator__item-rect"></div>
        </a>
      )
    }
    return (
      <div className="carousel-indicator">
        <div className="carousel-indicator__inner">
          {indicators}
        </div>
      </div>
    );
  }
}
