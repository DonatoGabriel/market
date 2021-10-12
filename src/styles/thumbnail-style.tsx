import styled from "styled-components";

export const StyledThumbnail = styled.div`
  flex-basis: 19%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }

  & .addToCart {
    text-align: center;
    margin-bottom: 20px;
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

export const StyledPrice = styled.div<{ discount: boolean }>`
  font-weight: bold;
  font-size: 20px;
  color: #3250c4;

  ${(props) =>
    props.discount &&
    `
    & span {
      display: inline-block;
      margin-right: 15px;
    }

    & span:nth-child(1) {
      color: #9b9da3;
      text-decoration: line-through;
    }
    
  `}
`;

export const AddToCart = styled.button`
  border: none;
  padding: 10px;
  width: 70%;
  margin-top: 20px;
  background-color: #3250c4;
  color: white;
  font-family: Poppins;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    background-color: #1033b8;
  }
`;
