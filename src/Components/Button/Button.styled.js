import styled from "styled-components";

export const StyledButton = styled.button`
  width: 11.26rem;
  height: 3.375rem;
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.5rem;
  text-align: center;
  background-color: transparent;
  color:rgb(12, 90, 18);
  border: 0.125rem solidrgb(30, 203, 111);
  border-radius: 0.9375rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &.active {
    background: #000000e5;
    border: 0.125rem solidrgb(230, 23, 48);
    box-shadow: 0px 0px 0.75rem 0.25remrgb(214, 24, 24) inset;
    color:rgb(18, 207, 21);
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
