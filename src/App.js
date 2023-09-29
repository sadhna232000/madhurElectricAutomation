import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Navbar from './Common/Navbar';
import SubNavbar from './Common/SubNavbar';
import Home from './Component/Home/Home';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <SubNavbar/>
      <Navbar/>
      <Home/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
