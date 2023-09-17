import styled from "@emotion/styled";

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  grid-gap: 20px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  width: 196px;
  height: 50px;
  padding: 14px 39px;
  color: #3470FF;
  background-color: #FFFFFF;
  border-radius: 10px;
  border: none;
  // box-shadow: 0 3.44px 3.44px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0 3.44px 3.44px 0 rgba(0, 0, 0, 0.25);

  }
`;