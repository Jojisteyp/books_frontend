import React from 'react'
import styled from 'styled-components'

function Chategory() {
  return (
    <>
    <MainContainer>
    <Top>
        <Button >Chatagory</Button>
   </Top>
   <Bottom>   
        <TextInput
        type="checkbox"
        id="id_favorite"
        />
        <Label for="id_favorite">Action</Label>
    </Bottom>
    <Bottom>   
        <TextInput
        type="checkbox"
        id="id_favorite"
        />
        <Label for="id_favorite">Romantic</Label>
    </Bottom>
    <Bottom>   
        <TextInput
        type="checkbox"
        id="id_favorite"
        />
        <Label for="id_favorite">Adventure</Label>
    </Bottom>   
     </MainContainer>
    </>
  )
}

export default Chategory

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center
  `;

const Top = styled.div`

`;
const Button =styled.h4``;

const Bottom =styled.div`
display: flex;
padding: 10px 0px;
`;

const Label = styled.label`
  display: block;
  width: 100%;
`;
const TextInput = styled.input`
  display: block;
  width: 50%;
  padding: 10px ;
  background-color: #ececec;
  border: none;
`;