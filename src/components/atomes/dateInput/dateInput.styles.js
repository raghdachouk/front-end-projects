import styled from "styled-components";

export const DateInputWrapper = styled.div`
margin: 0 10px;
  position: relative;
  .input {
    background: #1bc5bd;
    border-radius: 5px;
    width: 132px;;
    height: 32px;
    border: none;
    color: white;
    ::placeholder {
       color: white;
       padding 0 10px;
      }
      
  }
  .icon{
      position: absolute;
      right: 5px;
      top: 10px;
  }
`;
