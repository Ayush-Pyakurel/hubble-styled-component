import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  // background-color: #ebfbff;
  padding: 40px 0;
  color: red;
`;

export const Nav = styled.nav`
  display: flex;
  align-item: center;
  justify-content: space-between;
  margin-buttom: 40px;
`;

export const Logo = styled.img``;
