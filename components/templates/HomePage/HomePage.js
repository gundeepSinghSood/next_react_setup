import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';

class HomePage extends Component {
  render(){
    return(
      <>
        <h1>HomePage</h1>
        <Block id="start">
            Hello, scroll further
        </Block>

        <Block>Why hello there</Block>

        <Block>
            <a href="react.html">See react example</a>
        </Block>

       <Block>
            <a href="#start">Back to start</a>
       </Block>
      </>
    );
  }
};

const Block = styled.div`
    min-width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 32px;
    background: #013dff;
    color: #fff;
`

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;