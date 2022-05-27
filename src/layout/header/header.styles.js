import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f3f6f9;
  padding: 0 20px;
  .icon {
    margin: 0 20px;
  }
  .text-name {
    font-family: Roboto;
    font-weight: 700;
    font-size: 16px;
    color: #005b96;
  }
`;
