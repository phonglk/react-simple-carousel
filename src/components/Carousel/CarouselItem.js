import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

const STATE = {
  START_DISPLAY: 'START_DISPLAY',
  END_DISPLAY: 'END_DISPLAY',
  START_HIDING: 'START_HIDING',
  END_HIDING: 'END_HIDING',
}

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

  constructor(props) {
    super(props);
    // this.state = '';
    // this._to = 0;
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.current !== this.props.current) {
  //     clearTimeout(this._to);
  //     if (this.props.current) {
  //       this.setState(STATE.START_DISPLAY);
  //       this._to = setTimeout(() => {
  //         this.setState(STATE.END_DISPLAY);
  //       }, 500)
  //     } else {
  //       this.setState(STATE.START_HIDING);
  //       this._to = setTimeout(() => {
  //         this.setState(STATE.END_HIDING);
  //       }, 500)
  //     }
  //   }
  // }

  render() {
    const { children, current } = this.props;
    const style = {
      opacity: current ? 1 : 0,
    }
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
