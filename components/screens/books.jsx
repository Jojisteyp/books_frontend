import React from 'react'
import { Helmet } from 'react-helmet'
import styled from "styled-components";


function Books() {
  return (
<>
    <Helmet>
    <title>Books </title>
    </Helmet>
    <BodyContainer>
      <InnerContainer>
        <SubContainer>
          <Heading>Welcome</Heading>
          <SubHeading>Add Your Book →</SubHeading>
        </SubContainer>
      </InnerContainer>
    </BodyContainer>
</>

  )
}

export default Books
const BodyContainer = styled.div`
  padding-top: 35px;
`;
const InnerContainer = styled.div`
  width: 75%;
  margin: 0 auto;
`;
const Heading = styled.h1`
  font-size: 30px;
  margin-bottom: 30px;
  text-align: left;
`;
const SubHeading = styled.h5`
  font-size: 18px;
  color: rgb(229, 229, 49);
  margin-bottom: 50px;
  text-align: left;
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;