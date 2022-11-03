import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './fonts/JetBrainsMonoMedium.ttf';
import theme from './theme';

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
