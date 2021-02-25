import React from 'react';
import routes from './routes/routes';

import { GlobalStyles } from './style/GlobalStyle';
import { lightTheme } from './theme/lightTheme';
import { darkTheme } from './theme/darkTheme';
import { ThemeProvider } from 'styled-components';

// check dark mode hook
import { useDarkMode } from './hooks/useDarkMode';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// components
import { AppContainer } from './components/AppContainer';
import { ErrorContainer } from './components/ErrorContainer';
import Navbar from './components/navbar/Navbar';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

// add icons to library for use anywhere in app
library.add(fab, fas, far);

function App() {
  // get theme from user
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  // set themeMode from theme data from user
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  // only show page when theme is ready
  if(!componentMounted) {
    return (
      <ErrorContainer>
        <Icon icon={['fas', 'spinner']} size="3x" spin />
      </ErrorContainer>
    );
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <AppContainer>
        <header>
          <Navbar />
        </header>
        <h2>{ theme === 'light' ? 'Light theme' : 'Dark Theme'}</h2>
        <button onClick={toggleTheme}>Toggle theme</button>
        <main>
          {routes}
        </main>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
