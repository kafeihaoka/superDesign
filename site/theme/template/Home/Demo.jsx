import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import ticker from 'rc-tween-one/lib/ticker';
import SvgDrawPlugin from 'rc-tween-one/lib/plugin/SvgDrawPlugin';
import { enquireScreen } from 'enquire-js';
import { currentScrollTop } from '../utils';
import S_PNG from './assets/s_png'

TweenOne.plugins.push(SvgDrawPlugin);

export default class Demo extends React.PureComponent {
  static propTypes = {
    image: PropTypes.string,
  };

  static defaultProps = { image: S_PNG };


  constructor(props) {
    super(props);
    this.state = {};
    this.interval = null;
    this.gather = true;
    this.intervalTime = 9000;
    this.width = 320;
    this.height = 600;
    this.tickerOut = null;
    this.scale = 1;
  }

  componentDidMount() {
    this.dom = ReactDOM.findDOMNode(this);
    this.tickerOut = ticker.timeout(this.createPointData, 1400);
  }

  componentWillUnmount() {
    this.remInterval();
  }

  onResize = () => {
    enquireScreen((bool) => {
      this.scale = bool ? 0.7 : 1;
      if (!this.tickerOut) {
        const children = this.resizeData(this.state.children);
        this.setState({ children }, () => {
          if (!this.gather) {
            this.updateTweenData();
          }
          ticker.clear(this.interval);
          this.interval = ticker.interval(this.updateTweenData, this.intervalTime);
        });
      }
    }, 'only screen and (max-width: 414px)');
  };

  onMouseEnter = () => {
    // !this.gather && this.updateTweenData();
    if (!this.gather) {
      this.updateTweenData();
    }
    this.remInterval();
  };

  onMouseLeave = () => {
    // this.gather && this.updateTweenData();
    if (this.gather) {
      this.updateTweenData();
    }
    this.interval = ticker.interval(this.updateTweenData, this.intervalTime);
  };

  setDataToDom(data, w, h) {
    this.pointArray = [];
    const number = Math.round(w / 11);
    for (let i = 0; i < w; i += number) {
      for (let j = 0; j < h; j += number) {
        if (data[((i + j * w) * 4) + 3] > 150) {
          this.pointArray.push({ x: i, y: j, r: Math.random() * 18 + 12 });
        }
      }
    }

    let children = [];
    this.pointArray.forEach((item, i) => {
      const b = Math.random() * 0.4 + 0.1;
      children.push(
        <TweenOne className="point-wrapper" key={i.toString()} style={{ left: item.x, top: item.y }}>
          <TweenOne
            className="point"
            style={{
              width: item.r,
              height: item.r,
              opacity: b,
              backgroundColor: `rgb(${Math.round(Math.random() * 95 + 160)},255,255)`,
            }}
            animation={{
              y: (Math.random() * 2 - 1) * 10 || 5,
              x: (Math.random() * 2 - 1) * 5 || 2.5,
              delay: Math.random() * 1000,
              repeat: -1,
              duration: 3000,
              yoyo: true,
              ease: 'easeInOutQuad',
            }}
          />
        </TweenOne>
      );
    });
    this.pointArray.push({ x: 75, y: 180, r: 40 });
    children.push(
      <TweenOne
        className="point-wrapper"
        key={children.length}
        style={{
          left: 75,
          top: 180,
        }}
      >
        <TweenOne
          className="point"
          style={{
            width: 40,
            height: 40,
            backgroundColor: `rgb(${Math.round(Math.random() * 95 + 160)},255,255)`,
            opacity: Math.random() * 0.5 + 0.2,
          }}
          animation={{
            y: (Math.random() * 2 - 1) * 10 || 5,
            x: (Math.random() * 2 - 1) * 5 || 2.5,
            delay: Math.random() * 1000,
            repeat: -1,
            duration: 3000,
            yoyo: true,
            ease: 'easeInOutQuad',
          }}
        />
      </TweenOne>
    );
    children = this.resizeData(children);
    this.setState({
      children,
      end: true,
    }, () => {
      this.onResize();
      this.interval = ticker.interval(this.updateTweenData, this.intervalTime);
    });
  }

  resizeData = (children) => children.map((item, i) => {
    const child = item.props.children;
    const childrenProps = {
      ...child.props,
      style: {
        ...child.props.style,
        width: this.pointArray[i].r * this.scale,
        height: this.pointArray[i].r * this.scale,
      },
    };
    const props = {
      key: i,
      style: { left: this.pointArray[i].x * this.scale, top: this.pointArray[i].y * this.scale },
    };
    return React.cloneElement(item, props, React.cloneElement(child, childrenProps));
  });

  remInterval = () => {
    ticker.clear(this.interval);
    this.interval = null;
  }

  createPointData = () => {
    this.tickerOut = null;
    const w = this.width;
    const h = this.height;
    const canvas = document.createElement('canvas');
    this.dom.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, w, h);
    canvas.width = w;
    canvas.height = h;
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      this.imgData = ctx.getImageData(0, 0, w, h).data;
      this.setDataToDom(this.imgData, w, h);
      this.dom.removeChild(canvas);
    };
    img.crossOrigin = 'anonymous';
    img.src = this.props.image;
  };

  gatherData = () => {
    const children = this.state.children.map((item) => React.cloneElement(item, {
      animation: {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        delay: Math.random() * 500,
        duration: 800,
        ease: 'easeInOutQuint',
      },
    }));
    this.setState({ children });
  };

  disperseData = () => {
    const rect = document.getElementById('banner').getBoundingClientRect();// this.dom.getBoundingClientRect();
    const sideRect = document.getElementById('J-Side').getBoundingClientRect();
    const sideTop = sideRect.top + currentScrollTop();
    const children = this.state.children.map((item) => React.cloneElement(item, {
      animation: {
        x: Math.random() * document.body.clientWidth - sideRect.left - item.props.style.left,
        y: Math.random() * rect.height - sideTop - item.props.style.top,
        opacity: Math.random() * 0.4 + 0.1,
        scale: Math.random() * 2.4 + 0.1,
        duration: Math.random() * 500 + 500,
        ease: 'easeInOutQuint',
      },
    }));

    this.setState({
      children,
    });
  };

  updateTweenData = () => {
    this.dom = ReactDOM.findDOMNode(this);
    ((this.gather && this.disperseData) || this.gatherData)();
    this.gather = !this.gather;
  };

  render() {
    return (
      <TweenOneGroup
        enter={{ opacity: 0, type: 'from', duration: 800 }}
        leave={{ opacity: 0, duration: 800 }}
        className="logo-demo"
      >
        {!this.state.end ? (
          <div key="line">
            <svg
              className="right-side"
              viewBox="0,0,200,330"
            >
              <TweenOne
                d="m111.5,34.45313c-1,0 -1,0 -3,0c-2,0 -2.88152,0.19028 -6,2c-1.934,1.12234 -5.21168,3.71412 -8,6c-4.37469,3.58638 -8,8 -12,11c-4,3 -7.22273,5.72399 -11,9c-3.20512,2.77979 -5.71412,5.21168 -8,8c-1.79319,2.18734 -4,5 -5,7c-1,2 -2.45881,3.69344 -3,5c-0.76537,1.84776 -0.38268,3.07612 0,4c0.54119,1.30656 1.70546,2.34619 4,4c1.81399,1.30745 4,3 7,5c3,2 6.86829,4.28859 11,6c2.92156,1.21015 5.86829,2.28859 10,4c2.92156,1.21015 8.88152,3.19028 12,5c3.868,2.24468 8.05665,2.91753 11,5c4.0817,2.88786 6.57111,4.67947 11,7c2.80108,1.46764 6.37202,2.38509 10,5c3.4418,2.48071 6.21167,4.71413 9,7c2.18735,1.7932 4.41589,3.76108 6,7c1.38936,2.84073 1.4588,4.69344 2,6c1.14806,2.77164 0,5 0,7c0,2 0,4 0,6c0,2 -0.87766,4.06601 -2,6c-1.80972,3.11848 -3.45049,5.45049 -6,8c-5.09901,5.09901 -6.46529,5.98021 -15,10c-2.86084,1.34744 -8.09114,4.79568 -15,8c-6.08553,2.82246 -13.23531,5.36955 -22,9c-6.19757,2.56712 -12.92484,5.28473 -20,7c-4.95547,1.20139 -11,3 -16,4c-5,1 -9,1 -14,1c-3,0 -5,0 -7,-2c-1,-1 -1.4588,-2.69344 -2,-4c-0.38268,-0.92387 0,-1 0,-1l0,0l1,0"
                component="path"
                animation={[
                  {
                    opacity: 0, type: 'from', delay: 600, duration: 0,
                  },
                  {
                    SVGDraw: 0, type: 'from', duration: 250, ease: 'linear',
                  },
                ]}
              />
            </svg>
          </div>
        ) : (
          <div
            key="box"
            className="right-side blur"
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            id="J-Side"
          >
            {this.state.children}
          </div>
        )}
      </TweenOneGroup>
    );
  }
}
