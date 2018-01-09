# Introduction

Simple Composable carousel React Component based on https://getbootstrap.com/docs/4.0/components/carousel/

Mix and Match to create your own carousel

# Usage 
Declarative API
`import Carousel from './components/Carousel';`
```
---
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
```

- Must wrap with Carousel Component
- Option are identical with bootstrap's carousel: `interval`, `pause`, `ride`, `wrap`
- Using Carousel.Item to list all the slide of the carousel
- Built-in Carousel.Image to display image in the best way
- Optionally Include Carousel.Caption inside Carousel.Item to add caption to the slide
- Include Carousel.Control to display the slide control
- Include Carousel.Indicator to display the slide indicator (with navigation)

# Development

`npm start`

# Feature Analysis
## Basic
- [x] Carousel Item
- [x] Sliding/Auto
- [x] Controls
- [x] Indicator
- [x] Caption support

## Advance
- [x] Item with text
- Page Visibility API
- Progress Indicator
- Exposed DOM Event
- Exposed DOM API
