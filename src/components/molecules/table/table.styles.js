import styled from "styled-components";

export const WrapperTable = styled.div`
  table {
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    text-align: left;
    padding: 10px 25px;
  }
  th {
    font-size: 16px;
    text-align: start;
  }
  td {
    font-size: 14px;
  }

  padding: 10px;
  width: 100%;
  height: calc(100vh - 280px);
  overflow: auto;
  .header {
    display: flex;
    height: 70px;
    justify-content: space-between;
    .title {
      display: flex;
      flex-direction: column;
      align-items: baseline;
    }
  }

  .container-projects {
    background-color: #f1fafe;
    padding: 15px;

    &__title {
      text-align: left;
      font-weight: bold;
    }
    &__details {
      margin-top: 15px;
      &__project {
        margin-top: 10px;
        &__header {
          display: flex;
          background-color: #fff;
          padding: 25px 25px;
          border-radius: 7px;
          justify-content: space-between;
          font-weight: bold;
          cursor: pointer;
        }
        &__body {
          &__values:nth-child(even) {
            background-color: #fff;
          }
        }
      }
    }
  }
`;
