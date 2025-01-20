import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LinkNav = styled(NavLink)`
  &.active button {
    background: #000000e5;
    border: 0.125rem solidrgb(13, 150, 52);
    box-shadow: 0px 0px 0.75rem 0.25remrgb(6, 86, 17) inset;
    color:rgb(54, 231, 107);
  }
`;

export const Logo = styled.img`
  height: 3.125rem;
  margin-right: 2rem;
`;

export const Nav = styled.nav`
  box-shadow: 0px 0px 0.75rem 0.25remrgb(21, 205, 85);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 4rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const NavContainer = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
