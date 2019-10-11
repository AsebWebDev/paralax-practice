import React, { Component } from 'react';
import Plx from 'react-plx';

// An array of parallax effects to be applied - see below for detail
const parallaxData = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 1,
        endValue: 4.5,
        property: 'scale',
      },
    ],
  },
];

const exampleParallaxData = [
    {
      start: 0,
      end: 300,
      properties: [
        {
          startValue: 0,
          endValue: 180,
          property: "rotate"
        },
        {
          startValue: 1,
          endValue: 1.5,
          property: "scale"
        },
        {
          startValue: 1,
          endValue: 0.0,
          property: "opacity"
        }
      ]
    },
    {
      start: 350,
      duration: 300,
      properties: [
        {
          startValue: "#3cb99c",
          endValue: "rgba(250,50,200,0.8)",
          property: "backgroundColor"
        },
        {
          startValue: 30,
          endValue: 100,
          property: "translateY"
        },
        {
          startValue: 0.75,
          endValue: 1,
          property: "opacity"
        }
      ]
    },
    {
      start: 700,
      duration: 1000,
      properties: [
        {
          startValue: 100,
          endValue: 0,
          property: "translateY"
        },
        {
          startValue: 1.5,
          endValue: 0.4,
          property: "scale"
        },
        {
          startValue: 90,
          endValue: 0,
          property: "rotate"
        },
        // Blur is not performant
        // Used just as an example for CSS filters
        {
          startValue: 0,
          endValue: 2,
          property: "blur"
        }
      ]
    }
  ];

let style = {
    left: "50%",
    marginLeft: -50,
    top: 100,
    width: 300,
    backgroundColor: "#34ba9c",
    height: 300,
    borderRadius: 20,
    lineHeight: "100px",
    textAlign: "center",
    position: "fixed",
}
  
export default class Example extends Component {
  render() {
    return (
        <div style={{ height: 3000 }}>
            <Plx
                className='MyAwesomeParallax'
                parallaxData={ parallaxData }
                style = {style}
            >
            <img alt="" src="https://community.adobe.com/legacyfs/online/avatars/a754554_Capture.png"/>
            </Plx>
        </div>
  
    );
  }
}