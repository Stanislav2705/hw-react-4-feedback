import styled from "styled-components";

export const ListButton = styled.ul`
  display: flex;
  justify-content: center;
  padding-left: 0;
  gap: 20px;
`
export const ItemButton = styled.li`
  list-style: none;
`
export const Button = styled.button`
  padding: 8px;
  width: 100px;
  cursor: pointer;
  border-radius: 5px;
  border-color: orange;
  background-color: #fff;
  color: orange;
  font-size: 18px;

  &:hover,
  &:focus {
    background-color: orange;
    color: #fff;
  }

`
