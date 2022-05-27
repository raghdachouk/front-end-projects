import styled from "styled-components";
export const WrapperContainer = styled.div`
  display: flex;
  width: 100%;
  height: 95%;
  flex-direction: row;
  justify-content: space-between;
  .container-table {
    width: 100%;
    &__total {
      background-color: #f1fafe;
      padding: 15px;
      width: 100%;
      border-radius: 10px;
      margin: 10px;
      font-weight: bold;
    }
  }
`;
