import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../App";

function SingleFood() {
  const [des, setDes] = useState({});
  const { id } = useParams();
  const { userData } = useContext(UserContext);
  const navi = useNavigate();
  const [user, setUser] = useState("john wick");
  const [comment, setComment] = useState("its a good content");

  const getSingleFood = async () => {
    const result = await axios
      .get(`http://127.0.0.1:8000/api/v1/books/${id}/`, {
        headers: {
          Authorization: `Bearer ${userData?.access}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setDes(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        if (error.response.status && error.response.status === 401) {
          navi("/auth/login");
        }
      });
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/v1/books/${id}/delete/`, {
      headers: {
        Authorization: `Bearer ${userData?.access}`,
      },
    });
    navi("/home");
  };
  

  const add_to_favorites = async (id) => {
    console.log(id, "==id ==");
    await axios
      .post(`http://127.0.0.1:8000/api/v1/books/${id}/add-to-favorites/`, {
        headers: {
          Authorization: `Bearer ${userData?.access}`,
        },
      })
      .then((response) => {
        console.log(response, "==favourite");
        if (response.data.status_code === 6000) {
          const favorites = document.getElementById("Favourites");
          favorites.style.display = "none";
          const fav = document.getElementById("fav");
          fav.style.display = "block";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const createComments= async(id)=>{
    console.log(id);
    await axios
      .post(`http://127.0.0.1:8000/api/v1/books/comments/create/${id}`, {
        headers: {
          Authorization: `Bearer ${userData?.access}`,
        },
        })
        .then((response) => {
          console.log(response, "==createComments");
          })
          .catch((err) => {
          console.log(err);
          });
        };
    

  const renderFoods = () => {
    return (
      <>
        <Helmet>
          <title>All Books|Single Books</title>
        </Helmet>
        <MainContainer>
          <DesHead>{des.name}</DesHead>
          <DeleteContainer>
            <Link onClick={() => deleteUser(des.id)}>
              <Delete>Delete Post</Delete>
            </Link>
            <Link to={`/description/${des.id}/update/${des.id}`}>
              {" "}
              <Delete>Update Post</Delete>
            </Link>
            <Delete onClick={() => add_to_favorites(des.id)} id="Favourites">
              Add to Favourite
            </Delete>
            <Fav id="fav">Favourite</Fav>

            <PublisherName> Publisher: {des.author}</PublisherName>
          </DeleteContainer>

          <FoodCard>
            <LeftContainer>
              <ImageContainer>
                <Image src={des.featured_image} />
              </ImageContainer>
            </LeftContainer>
            <RightContainer></RightContainer>
          </FoodCard>
          <Content>
            <Top>Book Name :</Top>
            <Cont>{des.title}</Cont>
            {/* <Top>Description  : </Top>
            <Cont>{des.description}</Cont> */}
            </Content>
            <IconContainer>
              <Icon src={require("../assets/images/icon_star.png")}/>
              <Icon src={require("../assets/images/icon_star.png")}/>
              <Icon src={require("../assets/images/icon_star.png")}/>
              <Icon src={require("../assets/images/icon_star.png")}/>
              <Icon src={require("../assets/images/icon_star.png")}/>
            </IconContainer>
            <CmtBox>
              <Comment type="text" placeholder="Create your comment..."/>
              <Button onClick={() => createComments(1)}>Create</Button>
            </CmtBox>
            <CmtTitle>All Comments</CmtTitle>
            <ALLComments>
            <CmtUser>{user}</CmtUser>
            <CmtName>{comment}</CmtName>
            </ALLComments>
            
        </MainContainer>
      </>
    );
  };
  useEffect(() => {
    getSingleFood();
  }, []);
  return <>{renderFoods()}</>;
}

export default SingleFood;
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
  :hover{
    border: 2px solid red;
  }
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
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
`;
const Image = styled.img`
  display: block;
  width: 100%;
`;
const RightContainer = styled.div`
  /* display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 48%; */
`;

const Content = styled.div`
display: flex;
`;
const Top = styled.h3`
  font-size: 26px;
  margin-bottom: 20px;
`;
const Cont = styled.p`
    color: rgb(84, 84, 84);
    font-size: 18px;
    line-height: 3.5rem;
    font-weight: 500;
    margin-left: 10px;
  
`;
const Fav = styled.div`
  display: none;
  color: green;
  border: 2px solid green;
  border-radius: 30px;
  padding: 4px 8px;
  margin-left: 10px;
`;
const IconContainer =styled.div`
  display: flex;
  padding-bottom: 30px;
  width: 30px;
  `;

const Icon =styled.img`
  display: block;
  width: 100%;
  `;
const CmtBox =styled.div`
  padding-bottom: 20px;
`;
const Comment =styled.input`
  padding: 10px 30px;
  border: 2px solid grey;
  border-radius: 5px;
`;

const ALLComments= styled.div`
  padding: 10px 40px;
  border: 2px solid grey;
  border-radius: 5px;
  display: inline-block;
  margin-bottom: 20px;

`;
const Button= styled.button`
  padding: 12px 30px;
  border: 0px solid grey;
  border-radius: 7px;
  margin-left: -7px;
  font-weight:600 ;
  background-color: #3faadc;
  :hover{
  background-color: #8c8c32;
  color: #ffffff;
}
`;
const CmtTitle= styled.h4`
padding-bottom: 10px;

`;

const CmtUser= styled.h5`

`;
const CmtName= styled.span`
`;