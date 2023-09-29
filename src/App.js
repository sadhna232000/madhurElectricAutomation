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
import './css/Style.css'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Navbar from './Common/Navbar';
import SubNavbar from './Common/SubNavbar';
import Home from './Component/Home/Home';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import About from './Component/Home/About';
import Contact from './Component/Contact/Contact';

function App() {
  return (
    <>
    <SubNavbar/>
      <Navbar/>
<Router>

  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</Router>
</>
    // <ChakraProvider theme={theme}>
    /* <Box textAlign="center" fontSize="xl">
          <ColorModeSwitcher justifySelf="flex-end" />
          <SubNavbar/>
      <Navbar/>
      <Home/>
      </Box> */
    // </ChakraProvider>
  );
}

export default App;
