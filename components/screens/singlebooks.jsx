import React from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link,  } from "react-router-dom";


function Singlebooks() {
  return (

 <>
    <Helmet>
      <title>|Single Books</title>
    </Helmet>
    <MainContainer>
      <DesHead></DesHead>
      <DeleteContainer>
        <Link >
          <Delete>Delete Post</Delete>
        </Link>
        <Link >
          <Delete>Update Post</Delete>
        </Link>
        <Delete id="Favourites">
          Add to Favourite
        </Delete>
        <Fav id="fav">Favourite</Fav>

        <PublisherName> Publisher:</PublisherName>
      </DeleteContainer>
      <FoodCard>
        <LeftContainer>
          <ImageContainer>
            <Image />
          </ImageContainer>
        </LeftContainer>
        <RightContainer></RightContainer>
      </FoodCard>
      <Content></Content>
    </MainContainer>
</>
);
};



export default Singlebooks;

const MainContainer = styled.div`
width: 77%;
margin: 0 auto;
padding-top: 65px;
`;
const DesHead = styled.h1`
font-size: 50px;
margin-bottom: 10px;
`;
const DeleteContainer = styled.div`
display: flex;
align-items: center;
/* width: 25%; */
margin-bottom: 20px;
`;
const Delete = styled.span`
display: inline-block;
color: #b4b4b4;
border: 2px solid #b4b4b4;
border-radius: 30px;
padding: 4px 8px;
margin-left: 10px;
`;

const PublisherName = styled.h6`
margin-left: 16px;
font-size: 16px;
color: #a2a2a2;
`;
const FoodCard = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 30px;
`;
const LeftContainer = styled.div`
width: 50%;
`;
const ImageContainer = styled.div`
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
overflow: hidden;
`;
const Image = styled.img`
display: block;
width: 100%;
`;
const RightContainer = styled.div`
 display: flex;
justify-content: space-between;
flex-wrap: wrap;
width: 48%; 
`;

const Content = styled.div``;

// const Top = styled.h3`
// font-size: 26px;
// margin-bottom: 20px;
// `;

const Fav = styled.div`
display: none;
color: green;
border: 2px solid green;
border-radius: 30px;
padding: 4px 8px;
margin-left: 10px;
`;
