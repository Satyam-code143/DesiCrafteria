import React, { Component, Fragment } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  aling-items: center;
  justify-content: center;
`;

const SubContainer = styled.div`
  width: 80%;
  padding: 20px;
  display: flex;
  flex-direction:column;

`;

const CatContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <SubContainer>
          <div>
            <h1 style={{textAlign:'center'}}>Shop by Category</h1>
          </div>
          <CatContainer>
            <div>cat1</div>
            <div>cat2</div>
            <div>cat3</div>
          </CatContainer>
        </SubContainer>
      </Container>
    );
  }
}

export default Category;
