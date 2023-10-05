import React from 'react'
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link,  } from "react-router-dom";


function Signup() {
  return (
<>
      <Helmet>
        <title>Signup Page</title>
      </Helmet>

      <Container>
        <LeftContainer>
          <Image src={require("../assets/images/booksbg1.png")} />
        </LeftContainer>
        <RightContainer>
          <LoginContainer>
            <LoginHeading>Register into Account</LoginHeading>
            <LoginInfo>Create and Explore the world of Books</LoginInfo>
            <Form >
              <InputContainer>
                <TextInput
                  type="text"
                  placeholder="Name"
                />
              </InputContainer>
              <InputContainer>
                <TextInput
                  type="email"
                  placeholder="Email"
                />
              </InputContainer>
              <InputContainer>
                <TextInput
                  type="password"
                  placeholder="Password"
                />
              </InputContainer>

              <ButtonContainer>
                <SubmitButton>Create an Account</SubmitButton>
                <LoginButton to="/auth/login/">Login Now</LoginButton>
              </ButtonContainer>
            </Form>
          </LoginContainer>
        </RightContainer>
      </Container>
    </>
  );
}

export default Signup;
const Container = styled.div`
  height: calc(110vh - 120px);
  display: flex;
  background-color: #c2b3b3;
`;
const LeftContainer = styled.div`
  width: 35%;
  padding: 100px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 10px;
`;

const RightContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: 20px;
  padding: 80px;
`;
const LoginContainer = styled.div`
  width: 100%;
`;
const LoginHeading = styled.h3`
  font-size: 46px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #171515;
`;
const LoginInfo = styled.p`
  font-size: 18px;
  margin-bottom: 35px;
  color: #171515;
`;
const Form = styled.form`
  width: 100%;
  display: block;
`;
const InputContainer = styled.div`
  margin-bottom: 15px;
`;
const TextInput = styled.input`
  padding: 20px 25px 20px 30px;
  width: 90%;
  display: block;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  outline: none;
`;
const LoginButton = styled(Link)`
  display: inline-block;
  border: 4px solid #dfb40a;
  transition: background-color 0.5s ease 0s;
  text-decoration: none;
  color: #fff;
  padding: 25px 70px;
  font-weight: bold;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  background: #000;
  &:hover {
    background-color:  #dfb40a;
    color: #000;
  }
`;
const SubmitButton = styled.button`
  display: inline-block;
  border: 4px solid  #dfb40a;
  transition: background-color 0.5s ease 0s;
  color: #fff;
  padding: 25px 40px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  background: #000;
  &:hover {
    background-color:  #dfb40a;
    color: #000;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

