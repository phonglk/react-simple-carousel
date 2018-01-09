import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import CarouselItem from './CarouselItem';
import CarouselImage from './CarouselImage';
import CarouselControl from './CarouselControl';
import CarouselIndicator from './CarouselIndicator';

const VALID_CHILD_TYPES_DESC = ['CarouselItem', 'CarouselImage', 'CarouselControl', 'CarouselIndicator']
const VALID_CHILD_TYPES = [CarouselItem, CarouselImage, CarouselControl, CarouselIndicator]

// based on https://getbootstrap.com/docs/4.0/components/carousel/
export default class Carousel extends PureComponent {
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    style: PropTypes.object,

    interval: PropTypes.number,
    pause: PropTypes.any, // 'hover', false,
    ride: PropTypes.any, // false, 'carousel'
    wrap: PropTypes.bool,
  }

  static defaultProps = {
    width: '100%',
    height: 'auto',
    style: {},
    interval: 5000,
    pause: 'hover',
    ride: false,
    wrap: false,
  }
  
  static childContextTypes = {
    navigate: PropTypes.func,
    navigateDone: PropTypes.func,
  }

  getChildContext() {
    return { 
      navigate: this.navigate.bind(this),
      navigateDone: this.navigateDone.bind(this),
    };
  }

  constructor(props) {
    super(props);
    let currentSlide = 0;
    const controlComponents = {};
    const slideComponents = [];
    let slideCount = 0;
    
    // this should move to componentWillUpdate to re-run when props is changed
    React.Children.forEach(props.children, child => {
      if(VALID_CHILD_TYPES.indexOf(child.type) === -1) {
        const elementName = typeof child.type === 'string' ? child.type : child.type.name
        console.warn(`Invalid element inside carousel will be ignored: ${elementName}`);
        return;
      }
      if (child.type === CarouselItem) {
        slideComponents.push(child)
        slideCount++;
      } else {
        controlComponents[VALID_CHILD_TYPES_DESC[VALID_CHILD_TYPES.indexOf(child.type)]] = child;
      }
    })

    slideComponents.forEach((slide, i) => {
      if (slide.props.default === true) {
        currentSlide = i;
      }
    })

    this.state = {
      currentSlide,
      controlComponents,
      slideComponents,
      slideCount,
      isNavigating: false,
      isHovering: false,
    }

    this.toSliding = 0;
    this.__mouseEnterLeaveStackCount = 0;
  }

  autoSliding() {
    this.navigate('next');
  }

  autoSlidingSchedule() {
    clearTimeout(this.toSliding);
    this.toSliding = setTimeout(() => this.autoSliding(), this.props.interval);
  }

  cancelAutoSliding() {
    clearTimeout(this.toSliding);
  }

  navigate(dir) {
    const { currentSlide, slideComponents } = this.state;
    const slideCount = React.Children.count(slideComponents);
    let nextSlide = dir;
    if (dir === 'prev') nextSlide = currentSlide - 1;
    if (dir === 'next') nextSlide = currentSlide + 1;
    if (nextSlide > slideCount - 1) {
      if (this.props.wrap) return;
      nextSlide = 0;
    }
    if (nextSlide < 0) {
      if (this.props.wrap) return;
      nextSlide = slideCount - 1;
    }
    this.setState({
      currentSlide: nextSlide,
      isNavigating: true,
    })
  }

  navigateDone() {
    this.setState({
      isNavigating: false,
    })
    if (this.props.ride === 'carousel') this.autoSlidingSchedule(); // to minus the animation time
  }

  handleMouseEnter = () => {
    if (this.props.pause === 'hover') {
      this.cancelAutoSliding();
    }
  }

  handleMouseLeave = () => {
    if (this.props.pause === 'hover') {
      this.autoSlidingSchedule();
    }
  }

  componentDidMount() {
    if(this.props.ride === 'carousel') {
      this.autoSlidingSchedule();
    }
  }

  renderSlides(){
    const { slideComponents, currentSlide } = this.state;
    const slides = React.Children.map(slideComponents, (slide, i) => {
      return React.cloneElement(slide, {
        key: i,
        current: currentSlide === i,
      });
    });
    return slides;
  }

  renderControl() {
    const controlElement = this.state.controlComponents.CarouselControl;
    if (!controlElement) return null;
    let enablePrev = true;
    let enableNext = true;
    if (this.state.isNavigating) {
      enableNext = enablePrev = false;
    } else if (this.props.wrap === true) {
      if (this.state.currentSlide === 0) {
        enablePrev = false;
      } else if (this.state.currentSlide === this.state.slideCount - 1) {
        enableNext = false;
      }
    }
    
    return React.cloneElement(controlElement, {
      enablePrev,
      enableNext
    });
  }
  renderIndicator() {
    const element = this.state.controlComponents.CarouselIndicator;
    if (!element) return null;
    const { currentSlide } = this.state;
    const slideCount = this.state.slideCount;
    let enabled = true;
    if (this.state.isNavigating) {
      enabled = false;
    }
    return React.cloneElement(element, {
      enabled,
      currentSlide,
      slideCount
    });
  }

  render() {
    const {
      style: propStyle,
      width,
      height,
    } = this.props;
    const style = {
      ...propStyle,
      width,
      height
    }
    return (
      <div
        className="carousel"
        style={style}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="carousel__inner">
          {this.renderControl()}
          {this.renderIndicator()}
          {this.renderSlides()}
        </div>
      </div>
    )
  }
}