import React, { Component } from 'react';
// import { Icon, Modal } from 'antd';
import PropTypes from 'prop-types';
import {
  A, H2, Container, LoginBox, TagBox, Header
} from './styles';

class Login extends Component {
  static async getInitialProps() {
    return { layout: 'none' };
  }

  render() {
    return (
      <Container>
          <Header> Tiger Project </Header>
        <LoginBox>
          <H2> Client </H2>
        </LoginBox>
        <LoginBox>
          <H2>Vendor  </H2>
        </LoginBox>   
      </Container>
    );
  }
}

Login.propTypes = {
  query: PropTypes.shape({}),
};

Login.defaultProps = {
  query: null,
};

export default Login;
