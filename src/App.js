import { ThemeProvider } from 'styled-components';
import Header from './Components/Header';

import { Container } from './Components/styles/Contaier.styled';

import GlobalStyles from './Components/styles/Global';

const themes = {
  colors: {
    header: ' #ebfbff',
    body: '#fff',
    footer: '#003333',
  },
};

function App() {
  return (
    <ThemeProvider theme={themes}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <h3>Hello</h3>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
