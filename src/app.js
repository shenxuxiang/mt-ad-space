import React, { PureComponent } from 'react';
import img1 from './static/images/11.jpg';
import img2 from './static/images/12.jpg';
import img3 from './static/images/13.jpg';
import img4 from './static/images/14.jpg';
import img5 from './static/images/15.jpg';
import img6 from './static/images/16.png';
import AdSpace from './ad-space';
import './app.css';

const source = [img1, img2, img3, ];
const source_2 = [[img1, img2], [img3, img4], [img5, img6]];

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      indicator: 0,
      key: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize, false);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize, false);
  }

  handleResize = () => {
    this.setState((prevState) => ({ key: prevState.key + 1 }));
  }

  render() {
    return (
      <div className="container">
        <div style={{ height: 200 }}></div>
        <AdSpace 
          key={`key-a-${this.state.key}`}
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
          key={`key-b-${this.state.key}`}
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
