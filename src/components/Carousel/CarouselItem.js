import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

export default class CarouselItem extends PureComponent {
  static propTypes = {
    current: PropTypes.bool,
    default: PropTypes.bool,
  }

  static defaultProps = {
    current: false,
    default: false,
  }

  static contextTypes = {
    navigateDone: PropTypes.func,
  }

  render() {
    const { children, current } = this.props;
    const classNames = ['carousel-item'];
    if (current) {
      classNames.push('carousel-item_current')
    }
    return (
      <CSSTransition
        in={current}
        timeout={500}
        classNames="carousel-item_ani"
        onExited={this.context.navigateDone}
        >
        <div className={classNames.join(' ')}>
          {children}
        </div>
      </CSSTransition>
    );
  }
}
