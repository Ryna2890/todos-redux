import styled from "styled-components";

export const Container = styled.input`
  margin: 14px 11px 14px 14px;

  &::before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-top: -4px;
    margin-left: -4px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #fff;
  }

  &:hover:before {
    border-color: #b3d7ff;
  }

  &:checked:before {
    width: 16px;
    height: 16px;
    border: 1px solid #3F46D6;
    background-color: green;
    clip-path: polygon(45% 64%, 84% 14%, 100% 28%, 47% 100%, 0 49%, 15% 32%);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 10px 8px;
  }
`