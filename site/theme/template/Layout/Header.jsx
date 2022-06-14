import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Button } from 'antd';
import { Link } from 'react-router';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import GitHubButton from 'react-github-button';
import navArr from './nav';
import * as utils from '../utils';

const LOGO = 'data:image/png;base64,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';
class Header extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
    activeKey: PropTypes.any,
  };

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  static defaultProps = {
    className: 'header',
  };

  constructor(props) {
    super(props);
    this.state = {
      openAnim: null,
      phoneOpen: false,
      barAnim: [],
    };
  }

  getAnimData = (phoneOpen) => (phoneOpen ? {
    phoneOpen: false,
    openAnim: { opacity: 0, delay: 300, duration: 400 },
    barAnim: [
      { rotate: 0, y: 0, duration: 300 },
      { opacity: 1, duration: 300 },
      { rotate: 0, y: 0, duration: 300 },
    ],
  }
    : {
      phoneOpen: true,
      openAnim: { opacity: 1, duration: 400 },
      barAnim: [
        { rotate: 45, y: 6, duration: 300 },
        { opacity: 0, duration: 300 },
        { rotate: -45, y: -6, duration: 300 },
      ],
    });

  phoneClick = (e, phoneOpen, href, isLogo) => {
    if (!this.props.isMobile || (isLogo && !phoneOpen)) {
      return;
    }
    if (href) {
      e.preventDefault();
      setTimeout(() => {
        this.context.router.push({
          pathname: href,
        });
      }, 600);
    }
    this.setState(this.getAnimData(phoneOpen));
  }

  handleLangChange = () => {
    const { pathname } = this.props.location;
    const currentProtocol = `${window.location.protocol}//`;
    const currentHref = window.location.href.substr(currentProtocol.length);

    if (utils.isLocalStorageNameSupported()) {
      localStorage.setItem('locale', utils.isZhCN(pathname) ? 'en-US' : 'zh-CN');
    }

    window.location.href = `${currentProtocol}${
      currentHref.replace(
        window.location.pathname,
        utils.getLocalizedPathname(pathname, !utils.isZhCN(pathname)),
      )
    }`;
  }

  render() {
    const { pathname } = this.props.location;
    const isZhCN = utils.isZhCN(pathname);
    const navToRender = navArr.map((item) => {
      const className = this.props.activeKey === item.key ? 'active' : '';
      const link = utils.getLocalizedPathname(item.href, isZhCN);
      if (item.open) {
        return (
          <li key={item.key}>
            <a href={item.href} target="_blank">{item.name}</a>
          </li>
        );
      }
      return (
        <li key={item.key}>
          <Link
            to={link}
            className={className}
            disabled={item.disabled}
            onClick={(e) => {
              this.phoneClick(e, this.state.phoneOpen, link);
            }}
          >
            {item.name}
          </Link>
        </li>
      );
    });
    const gitBtn = (
      <span className="git-btn">
        <GitHubButton
          type="stargazers"
          namespace="ant-design"
          repo="ant-motion"
        />
      </span>
    );

    //去掉中英文切换功能
    // navToRender.push(
    //   <li key="lang" className="lang-btn">
    //     <Button ghost size="small" onClick={this.handleLangChange}>
    //       <FormattedMessage id="app.header.lang" />
    //     </Button>
    //   </li>
    // );
    // 去掉github星级显示
    // if (!this.props.isMobile) {
    //   navToRender.push(
    //     <li key="git" className="git-btn-li">
    //       {gitBtn}
    //     </li>
    //   );
    // }
    return (
      <header
        className={`${this.props.className}-wrapper${this.state.phoneOpen ? ' open' : ''}`}
      >
        <div className={this.props.className}>
          <TweenOne
            className={`${this.props.className}-logo`}
            animation={{ opacity: 0, type: 'from' }}
          >
            <Link
              to={utils.getLocalizedPathname('/', isZhCN)}
              key="logo"
              onClick={(e) => {
                this.phoneClick(e, this.state.phoneOpen, '/', true);
              }}
            >
              <img className="logo-img" alt="img" height="24" src={LOGO} />
              <span style={{color:'#fff',marginLeft:'12px',fontSize:'16px'}}> super design </span>
              {/* <img alt="img" height="14" src="https://zos.alipayobjects.com/rmsportal/bNfCyCcgnyTgRmz.svg" /> */}
            </Link>
          </TweenOne>
          {this.props.isMobile && gitBtn}
          {
            this.props.isMobile
              ? (
                <div className="phone-nav">
                  <div
                    className="phone-nav-bar"
                    onClick={(e) => {
                      this.phoneClick(e, this.state.phoneOpen);
                    }}
                  >
                    <TweenOne component="em" animation={this.state.barAnim[0]} />
                    <TweenOne component="em" animation={this.state.barAnim[1]} />
                    <TweenOne component="em" animation={this.state.barAnim[2]} />
                  </div>
                  <TweenOne
                    className="phone-nav-text-wrapper"
                    animation={this.state.openAnim}
                    style={{ pointerEvents: this.state.phoneOpen ? 'auto' : 'none' }}
                  >
                    <QueueAnim
                      component="ul"
                      duration={150}
                      interval={50}
                      delay={[200, 0]}
                      ease={['easeOutQuad', 'easeInQuad']}
                      type="bottom"
                      leaveReverse
                    >
                      {this.state.phoneOpen && navToRender}
                    </QueueAnim>

                  </TweenOne>
                </div>
              )
              : (
                <TweenOne
                  component="nav"
                  className="web-nav"
                  animation={{ opacity: 0, type: 'from' }}
                >
                  <ul>
                    {navToRender}
                  </ul>
                </TweenOne>
              )
          }
        </div>
      </header>
    );
  }
}

export default Header;
