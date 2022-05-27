import styled from "styled-components";

export const SideBarWrapper = styled.aside`
  width: 50px;
  border-right: 1px solid #f3f6f9;
  padding: 20px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 150px);
  overflow: hidden;
  align-items: center;
  .icon-wrapper {
    padding: 10px 0;
  }
`;
