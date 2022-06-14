import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'antd';
import * as utils from '../utils';

class Footer extends React.PureComponent {
  render() {
    const { pathname } = this.props.location;
    const isZhCN = utils.isZhCN(pathname);
    return (
      <footer id="footer" className="dark">
        <div className="footer-wrap">
          <Row>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>super design</h2>
                <div>
                  <a target="_blank " href="https://github.com/kafeihaoka/superDesign">
                    <FormattedMessage id="app.footer.repo" />
                  </a>
                </div>
                <div>
                  <a href="#" target="_blank ">
                    <FormattedMessage id="app.footer.chinamirror" />
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2><FormattedMessage id="app.footer.links" /></h2>
                <div>
                  <a target="_blank " href="http://ant.design">
                    Ant Design
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2><FormattedMessage id="app.footer.community" /></h2>
                <div>
                  <a target="_blank" rel="noopener" href="https://github.com/kafeihaoka/superDesign/issues">
                    <FormattedMessage id="app.footer.issues" />
                  </a>
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener"
                    href='#'
                  >
                    <FormattedMessage id="app.footer.work-with-us" />
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2>
                  <FormattedMessage id="app.footer.more-product" />
                </h2>
              </div>
            </Col>
          </Row>
        </div>
        <div className="bottom-bar">
          Made
          by
          <a target="_blank" rel="noopener noreferrer" href="#">
            super design
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
