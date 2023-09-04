import styled from "styled-components";

export const InputBase = styled.input`
  height: 60px;
  width: 100%;
  border-radius: 8px;
  background: #FFFFFF;
  box-shadow: 0 10px 40px rgba(29, 22, 23, 0.07);
  border: none;
  padding-left: 15px;
  padding-right: 15px;

  &:active, &:hover, &:focus {
    outline: 0;
    outline-offset: 0;
  }
`