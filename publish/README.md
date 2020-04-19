# mt-ad-space

A light-weight React mt-ad-space component with extremely easy API（只适用于移动端项目）. [Online Demo](https://shenxuxiang.github.io/mt-ad-space/), welcome [code review](https://github.com/shenxuxiang/mt-ad-space)

## Installation
```sh
npm install mt-ad-space --save
```

## Usage
```js
import React, { PureComponent } from 'react';
import img1 from './static/images/11.jpg';
import img2 from './static/images/12.jpg';
import img3 from './static/images/13.jpg';
import img4 from './static/images/14.jpg';
import img5 from './static/images/15.jpg';
import img6 from './static/images/16.png';
import AdSpace from 'mt-ad-space';
import './app.css';

const source = [img1, img2, img3, ];
const source_2 = [[img1, img2], [img3, img4], [img5, img6]];

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      indicator: 0,
    };
  }

  render() {
    return (
      <div className="container">
        <div style={{ height: 200 }}></div>
        <AdSpace 
          width={320}
          spacing={10}
          onChange={(indicator) => {
            this.setState({ indicator })
          }}
        >
          {
            source.map((item, key) =>
              <div key={key} className="item">
                <img src={item} />
              </div>
            )
          }
        </AdSpace>
        <h1>{this.state.indicator}</h1>
        <AdSpace 
          width={320}
          spacing={10}
        >
          {
            source_2.map((item, key) =>
              <ul key={key} className="ad-space">
                {
                  item.map(it =>
                    <li className="ad-space-item" key={it}>
                      <img src={it} />
                    </li>
                  )
                }
              </ul>
            )
          }
        </AdSpace>
      </div>
    );
  }
}
```

## props

| param            | detail                                         | type     | default         |
| ---------------- | -----------------------------------------------| -------- | -------         |
| width            | component width                                | number   | isRequired      |
| spacing          | spacing between each element                   | number   | isRequired      |
| children         | child node of component                        | array    | []              |
| onChange         | callback function when channel changes         | function | empty           |
