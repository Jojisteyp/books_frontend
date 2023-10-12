import React, { createContext, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
export const BooksContext = createContext();


function Books() {
  const [books, setBooks] = useState([]);
  console.log(books, "===book state");
  const { userData } = useContext(UserContext);
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const navi = useNavigate();

  const getBooks = async () => {
    const response = await axios
      .get("http://127.0.0.1:8000/api/v1/books/", {
        headers: {
          Authorization: `Bearer ${userData?.access}`,
        },
      })
      .then((response) => {
        console.log(response.data.data, "===api response");
        setBooks(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        if (error.response.status && error.response.status === 401) {
          navi("/auth/login");
        }
      });
  };

  async function bookserach(e) {
    e.preventDefault();
    setSearchText(search);
    setSearch("");
    await axios
      .get(`http://127.0.0.1:8000/api/v1/books/?q=${search}`, {
        headers: {
          Authorization: `Bearer ${userData?.access}`,
        },
      })
      .then((res) => {
        console.log("res", res);
        setBooks(res.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        if (error.response.status && error.response.status === 401) {
          navi("/auth/login");
        }
      });
  }
  const getBookRecipes = () => {
    return books.map((item) => {
      return (
        <BookItem key={item.id}>
          <Link to={`/description/${item.id}`}>
            <BookImageContainer>
              <BookImage src={item.featured_image} alt="image" />
            </BookImageContainer>
            <BookName>{item.name}</BookName>
            <PublisherName>Publisher:{item.author}</PublisherName>
          </Link>
        </BookItem>
      );
    });
  };
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <>
      <Helmet>
        <title>Books</title>
      </Helmet>
      <BooksContext.Provider value={books}>
        <BodyContainer>
          <InnerContainer>
            <SubContainer>
              <Heading>Welcome</Heading>
              <Link to="add/">
                <SubHeading>Add Your Book →</SubHeading>
              </Link>
            </SubContainer>
            <SubHeading>Explore Books</SubHeading>
            <SearchBox>
              <SearchForm onSubmit={bookserach}>
                <SearchInput
                  className="search"
                  value={search}
                  type="search"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  placeholder="Search for keywords with bookname and publishername "
                />
                <SearchSubmit onClick={bookserach}>Search</SearchSubmit>
              </SearchForm>
            </SearchBox>
            {searchText ? (
              <ResultHeading>Result of :{searchText}</ResultHeading>
            ) : (
              ""
            )}
            <BooksList>{getBookRecipes()}</BooksList>
          </InnerContainer>
        </BodyContainer>
      </BooksContext.Provider>
    </>
  );
}

export default Books;
const BodyContainer = styled.div`
  background: #a6a5a5;
  padding-top: 35px;
  height: 100%;
`;
const InnerContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  background: #a6a5a5;

`;
const Heading = styled.h1`
  font-size: 30px;
  margin-bottom: 30px;
  text-align: left;
  color: #fff;
`;
const SubHeading = styled.h5`
  font-size: 18px;
  color: #fff;
  margin-bottom: 50px;
  text-align: left;
 :hover{
  color: #f2f295;
 }
 
`;
const BooksList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const BookItem = styled.li`
  width: 23%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: 0 10px 15px 0px rgba(0, 0, 0, 0.1);

  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px 0px rgba(0, 0, 0, 0.3);
  }
`;
const BookImageContainer = styled.div``;
const BookImage = styled.img`
  display: block;
  width: 100%;
`;
const BookName = styled.h4`
  width: 92%;
  margin: 5px auto 0px;
`;
const PublisherName = styled.span`
  display: inline-block;
  margin-left: 10px;
  font-size: 15px;
`;
const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SearchBox = styled.div`
  margin-bottom: 50px;
`;
const SearchForm = styled.form`
  display: flex;
  align-items: center;
  background: #d3d3d1;
  padding: 18px 17px;
  border-radius: 4px;
  width: 38%;
`;
const SearchInput = styled.input`
  display: block;
  width: 100%;
  padding: 10px 10px;
  border: none;
  opacity: 0.5;
`;
const SearchSubmit = styled.button`
  margin-left: 5px;
  display: inline-block;
  border: 3px solid #b3ac3a;
  background-color: #000;
  padding: 8px 14px;
  font-size: 15px;
  color: #fff;
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.5s;
  &:hover {
    background-color: #b3ac3a;
    border: 3px solid #4e4b1f;
    color: #000;
  }
`;
const ResultHeading = styled.h3`
  margin-bottom: 25px;
  color: red;
`;
