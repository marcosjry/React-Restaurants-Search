import './App.css';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import Home from './pages/home/index';
import theme from './theme'


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Reset />
      <Home />
    </ThemeProvider>
    
    </>
  );
}

export default App;
