import React from 'react'
//styled-componentsのimport
import styled from 'styled-components';

const S_Container = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding:8px;
  margin:8px;
  display:flex;
  justify-content:space-around;
  align-items:center;
`
const S_Title = styled.p`
  margin: 0;
  color:#3d84a8;
  `
  const S_Button = styled.button`
  background-color: #abedd8;
  border:none;
  padding:8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color:#fff;
    cursor: pointer;
  }
`
export const StyledComponents = () => {
  return (
    <S_Container>
      <S_Title>- Styled StyledComponents -</S_Title>
      <S_Button>FIGHT!!</S_Button>
    </S_Container>
  )
}
// npm i styled-components