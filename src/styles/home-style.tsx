import styled from "styled-components";

export const Slogan = styled.div`
  max-width: 100%;
  height: 500px;
  margin-top: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 7px;
  background: url(https://www.muycanal.com/wp-content/uploads/2021/04/tienda_fisica_tecnologia.jpg);
  background-repeat: repeat;
  background-size: auto;
  background-position: center;
  background-size: cover;
  position: relative;
  color: white;
  z-index: 1;
  font-size: 29px;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: -1;
    border-radius: 7px;
  }

  & span {
    display: inline-block;
    margin-top: 225px;
  }
`;

export const StyledHeader = styled.div`
  background-color: #3250c4;
  padding: 20px 30px;
  border-radius: 5px;
  margin-top: 20px;
  color: white;
  font-size: 30px;

  & svg {
    font-size: 2.5rem;
    float: right;
  }

  & svg:hover {
    cursor: pointer;
  }
`;
