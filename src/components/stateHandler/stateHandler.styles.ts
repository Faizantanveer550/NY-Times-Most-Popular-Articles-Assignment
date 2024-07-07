import styled from "styled-components";

export const ErrorStateStyled = styled.div`
  position: fixed;
  max-width: 310px;
  opacity: 1;
  top: 77px;
  right: 50%;
  transform: translate(50%, 0%);
  z-index: 100;
  padding: 11px 47px 12px 17px;
  color: #d93f3c;
  background: #f7ebeb;
  font-size: 14px;
  box-shadow: 0 3px 6px 0 rgba(217, 63, 60, 0.24);
  border-radius: 4px;
  overflow-wrap: break-word;
  white-space: normal;
  text-align: left;

  .ant-btn {
    position: absolute;
    right: 16px;
    top: 10px;
    padding: 0;
    svg {
      width: 12px;
      path {
        fill: #d93f3c;
        stroke: #d93f3c;
      }
    }
  }
`;
