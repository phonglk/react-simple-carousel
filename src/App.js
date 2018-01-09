import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Carousel from './components/Carousel';
// https://farm8.staticflickr.com/7794/17341634475_47d43c96c4_c.jpg
// https://farm4.staticflickr.com/3205/3119458059_d7438f352f_b.jpg
// https://farm8.staticflickr.com/7007/13555224983_11802cabdc_c.jpg

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h3>Without carousel riding (No Auto sliding)</h3>
        <Carousel width="600px" height="400px" style={{ display: 'inline-block' }}>
          <Carousel.Control />
          <Carousel.Indicator />
          <Carousel.Item>
            <Carousel.Image src="https://farm8.staticflickr.com/7794/17341634475_47d43c96c4_c.jpg" />
          </Carousel.Item>
          <Carousel.Item default>
            <Carousel.Image src="https://farm4.staticflickr.com/3205/3119458059_d7438f352f_b.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Image src="https://farm8.staticflickr.com/7007/13555224983_11802cabdc_c.jpg" />
          </Carousel.Item>
        </Carousel>
        <h3>With carousel riding (Auto sliding)</h3>
        <Carousel width="500px" height="350px" style={{ display: 'inline-block' }} ride="carousel">
          <Carousel.Control />
          <Carousel.Indicator />
          <Carousel.Item default>
            <Carousel.Image src="https://farm8.staticflickr.com/7794/17341634475_47d43c96c4_c.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Image src="https://farm4.staticflickr.com/3205/3119458059_d7438f352f_b.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Image src="https://farm8.staticflickr.com/7007/13555224983_11802cabdc_c.jpg" />
          </Carousel.Item>
        </Carousel>
        <h3>100% Width, fixed height</h3>
        <Carousel width="100%" height="400px" style={{ display: 'inline-block' }} ride="carousel">
          <Carousel.Control />
          <Carousel.Indicator />
          <Carousel.Item default>
            <Carousel.Image src="https://farm8.staticflickr.com/7794/17341634475_47d43c96c4_c.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Image src="https://farm4.staticflickr.com/3205/3119458059_d7438f352f_b.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Image src="https://farm8.staticflickr.com/7007/13555224983_11802cabdc_c.jpg" />
          </Carousel.Item>
        </Carousel>

        <h3>No Controls</h3>
        <Carousel width="500px" height="300px" style={{ display: 'inline-block' }} ride="carousel">
          <Carousel.Item default>
            <Carousel.Image src="https://farm8.staticflickr.com/7794/17341634475_47d43c96c4_c.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Image src="https://farm4.staticflickr.com/3205/3119458059_d7438f352f_b.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Image src="https://farm8.staticflickr.com/7007/13555224983_11802cabdc_c.jpg" />
          </Carousel.Item>
        </Carousel>

        <h3>Wrap</h3>
        <Carousel interval={1000} wrap width="500px" height="300px" style={{ display: 'inline-block' }} ride="carousel">
          <Carousel.Control />
          <Carousel.Indicator />
          <Carousel.Item default>
            <Carousel.Image src="https://farm8.staticflickr.com/7794/17341634475_47d43c96c4_c.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Image src="https://farm4.staticflickr.com/3205/3119458059_d7438f352f_b.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Image src="https://farm8.staticflickr.com/7007/13555224983_11802cabdc_c.jpg" />
          </Carousel.Item>
        </Carousel>

        <h3>With Caption</h3>
        <Carousel width="500px" height="300px" style={{ display: 'inline-block' }}>
          <Carousel.Control />
          <Carousel.Indicator />
          <Carousel.Item default>
            <Carousel.Image src="https://farm8.staticflickr.com/7794/17341634475_47d43c96c4_c.jpg" />
            <Carousel.Caption>
              <h3>Singapore</h3>
              <p>This is Singapore City</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Image src="https://farm4.staticflickr.com/3205/3119458059_d7438f352f_b.jpg" />
            <Carousel.Caption>
              <h3>Somewhere</h3>
              <p>This is somewhere in the world</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Image src="https://farm8.staticflickr.com/7007/13555224983_11802cabdc_c.jpg" />
          </Carousel.Item>
        </Carousel>

        <h3>Loop inside</h3>
        <Carousel width="500px" height="300px" style={{ display: 'inline-block' }}>
          <Carousel.Control />
          <Carousel.Indicator />
          {['https://farm8.staticflickr.com/7794/17341634475_47d43c96c4_c.jpg',
          'https://farm4.staticflickr.com/3205/3119458059_d7438f352f_b.jpg',
          'https://farm8.staticflickr.com/7007/13555224983_11802cabdc_c.jpg']
          .map((src, i) => (
            <Carousel.Item key={i}>
              <Carousel.Image src={src} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default App;
