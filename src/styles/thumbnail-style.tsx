import React from "react";
import styled from "styled-components";

export const StyledThumbnail = styled.div`
  flex-basis: 19%;
  height: 350px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledDiscount = styled.div`
  width: 30%;
  border-radius: 50px;
  background-color: #dff9ff;
  color: #3250c4;
  padding: 5px;
  margin: 10px;
  font-weight: bold;
  text-align: center;
  font-size: 13px;
`;

export const StyledPrice = styled.span`
  font-weight: bold;
  font-size: 20px;
  color: #3250c4;

  ${(props) => props.discount`
    color: #6a6b6f;
    text-decoration: line-through;
  `}
`;
