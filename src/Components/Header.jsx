import { StyledHeader } from './styles/Header.styled';

import { Container } from './styles/Contaier.styled';

const Header = () => {
  return (
    <StyledHeader bg={' #ebfbff'}>
      <Container>
        <h1>Hubble</h1>
      </Container>
    </StyledHeader>
  );
};

export default Header;
