import { Home } from './pages/Home';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { IconContext } from "phosphor-react";
import store from './redux/store';
import { GlobalStyles } from './styles/global/GlobalStyles';
import { defaultTheme } from './styles/themes';
import { BrowserRouter } from 'react-router-dom';
import wineVideo from '../src/assets/wine-007.mp4';

import * as S from './App..style'

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <IconContext.Provider
        value={{
          color: "limegreen",
          size: 32,
          weight: "bold",
          mirrored: false,
        }}
      >
        <GlobalStyles />
        <BrowserRouter>
          <S.AboutContent>
          <S.AboutVideoContainer>
            <S.Video autoPlay loop muted src={wineVideo} />
          </S.AboutVideoContainer>
          <Home />
          </S.AboutContent>
        </BrowserRouter>
      </IconContext.Provider>
    </ThemeProvider>
  </Provider>
);

export default App;
