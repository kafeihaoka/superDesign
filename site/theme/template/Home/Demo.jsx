import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import ticker from 'rc-tween-one/lib/ticker';
import SvgDrawPlugin from 'rc-tween-one/lib/plugin/SvgDrawPlugin';
import { enquireScreen } from 'enquire-js';
import { currentScrollTop } from '../utils';

TweenOne.plugins.push(SvgDrawPlugin);

export default class Demo extends React.PureComponent {
  static propTypes = {
    image: PropTypes.string,
  };

  static defaultProps = {
    image: 'data:image/png;base64,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'};//https://zos.alipayobjects.com/rmsportal/fbbUPUkdhvXwRYp.png 


  constructor(props) {
    super(props);
    this.state = {};
    this.interval = null;
    this.gather = true;
    this.intervalTime = 9000;
    this.width = 265;
    this.height = 290;
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
              viewBox="0,0,300,400"
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
