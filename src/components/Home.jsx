import React, { Component, Fragment } from "react";
import { Navbar, Button, Alignment } from "@blueprintjs/core";
import styled from "styled-components";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pic1 from '../images/jazmin-quaynor-bYOi200uQ6w-unsplash.jpg';
import pic2 from '../images/karly-santiago-E7zsz8JA8FM-unsplash.jpg';
import pic3 from '../images/neslihan-gunaydin-Ts0830UlVOM-unsplash.jpg';

const IconButton1 = styled(Button)`
  padding: 1rem;
`;

const CarouselDiv=styled.div`
    width:100%;
    height:600px;
`;

const CarouselImg=styled.img`
    width:100%;
    height:600px;
    background-size:cover;
    background-repeat:no-repeat;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <Navbar>
          <Navbar.Group>
            <Navbar.Heading style={{ fontFamily: "Dancing Script" }}>
              Desi Crafteria
            </Navbar.Heading>
          </Navbar.Group>
          <Navbar.Group align={Alignment.RIGHT}>
            <IconButton1 className="bp3-minimal" icon="search" />

            <IconButton1 className="bp3-minimal" icon="heart" />
            <IconButton1 className="bp3-minimal" icon="shopping-cart" />
          </Navbar.Group>
        </Navbar>
        <Carousel autoPlay={true} showStatus={false} showThumbs={false}>
                <CarouselDiv>
                    <CarouselImg src={pic1}/>
                </CarouselDiv>
                <CarouselDiv>
                    <CarouselImg src={pic2} />
                </CarouselDiv>
                <CarouselDiv>
                    <CarouselImg src={pic3} />
                </CarouselDiv>
            </Carousel>

      </Fragment>
    );
  }
}

export default Home;
