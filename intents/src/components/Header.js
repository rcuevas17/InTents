import React, { Component } from "react";
import styled, { css } from "styled-components";

function Header(props) {
  return (
    <Container {...props}>
      <Header1>
        <In7Row>
          <In7>IN</In7>
          <Tents7>TENTS</Tents7>
        </In7Row>
      </Header1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header1 = styled.div`
  width: 414px;
  height: 147px;
  background-color: rgba(113,129,97,1);
  flex-direction: row;
  display: flex;
  box-shadow: 0px 2px 10px  1px rgba(0,0,0,1) ;
`;

const In7 = styled.span`
  font-family: Saira Stencil One;
  font-style: normal;
  font-weight: 400;
  color: rgba(224,161,0,1);
  font-size: 42px;
  width: 163px;
  height: 54px;
  text-align: right;
`;

const Tents7 = styled.span`
  font-family: Saira Stencil One;
  font-style: normal;
  font-weight: 400;
  color: rgba(32,32,32,1);
  font-size: 42px;
  width: 251px;
  height: 54px;
  text-align: left;
`;

const In7Row = styled.div`
  height: 54px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-top: 52px;
`;

export default Header;
