import React, { Component } from "react";
import styled from "styled-components";

const FooterBar = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: colunm;
  background-color: #000;
  justify-content: space-between;
  left: 0;
  bottom: 0;
  height: 180px;
`;

const SubContainers = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

const Heading = styled.p`
  font-size: 16px;
  margin-top: 10px;
  font-weight: 600;
  text-transform: uppercase;
`;

const Anchors = styled.a`
  font-size: 14px;
  padding-top: 10px;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  &:hover {
    color: red;
  }
`;

const SocialIcon = styled.i`
  font-size: 16px;
  padding-top: 10px;
  color: #fff;
  &:hover {
    color: red;
  }
`;

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <FooterBar>
        <SubContainers>
          <div style={{ display: "flex", flexDirection: "column", width: 150 }}>
            <Heading>information</Heading>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Anchors style={{ textDecoration: "none" }}>About Us</Anchors>
            <Anchors style={{ textDecoration: "none" }}>
              Terms & Conditions
            </Anchors>
          </div>
        </SubContainers>
        <SubContainers>
          <div style={{ display: "flex", flexDirection: "column", width: 150 }}>
            <Heading>connect with us</Heading>
          </div>
          <div style={{ display: "flex", flexDirection: "column", width: 150 }}>
            <SocialIcon className="fa fa-facebook-square"> Facebook</SocialIcon>
            <SocialIcon className="fa fa-instagram"> Instagram</SocialIcon>
            <SocialIcon className="fa fa-youtube-square"> Youtube</SocialIcon>
          </div>
        </SubContainers>
        <SubContainers>
          <div style={{ display: "flex", flexDirection: "column", width: 150 }}>
            <Heading>Contact Us</Heading>
          </div>
          <div style={{ display: "flex", flexDirection: "column", width: 150 }}>
            <SocialIcon className="fa fa-clock-o"> Monday to Saturday</SocialIcon>
            <SocialIcon className="fa fa-map-marker"> Location</SocialIcon>
            <SocialIcon className="fa fa-phone"> Number</SocialIcon>
            <SocialIcon className="fa fa-envelope"> Email</SocialIcon>
          </div>
        </SubContainers>
      </FooterBar>
    );
  }
}

export default Footer;
