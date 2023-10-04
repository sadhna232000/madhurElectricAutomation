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
import Product from './Component/Product/Product';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

function App() {
  AOS.init();
  return (
    <>
    <SubNavbar/>
      <Navbar/>
<Router>

  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/product" element={<Product />} />
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
