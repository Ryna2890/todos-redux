import styled, {css} from "styled-components";

export interface TaskStyled {
    done: string;
}

export const Container = styled.div<TaskStyled>`
  display: flex;
  width: 100%;
  margin: 16px 16px;
  border-radius: 8px;

  ${({done}) =>
          done === "completed" ?
                  css`
                    background-color: #D9D9D93D;
                  `
                  :
                  css`
                    background-color: #A5A6F63D;
                  `
  }

`;

export const Text = styled.div`
  width: 230px;
  margin-top: 8px;
  margin-bottom: 8px;
  word-break: break-all;
`