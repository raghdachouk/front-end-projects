import styled from "styled-components";

export const WrapperContainer = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  .container-top {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
    &__text-container {
      &__title {
        font-weight: 700;
        font-size: 24px;
        color: #011f4b;
        line-height: 16px;
      }
      &__description {
        font-weight: 700;
        font-size: 16px;
        color: #7e8299;
        line-height: 16px;
      }
    }
    &__select-container {
      display: flex;
      align-items: center;
      flex-direction: row;
      button {
        background-color: #005b96;
        border: 0;
        color: #fff;
        padding: 5px;
        border-radius: 4px;
        width: 140px;
        height: 35px;
        font-size: 15px;
        margin-left: 25px;
        cursor: pointer;
      }
    }
  }
  .container-body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
