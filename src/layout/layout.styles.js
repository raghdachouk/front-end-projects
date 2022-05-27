import styled from "styled-components";

export const WrapperLayout = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .body-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    > main {
      padding: 20px;
      width: 100%;
    }
  }
`;
