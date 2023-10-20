import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  CSSReset,
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
import Electricalpanel from './Component/Product/Electricpanel';
// import TransmissionLines from './Component/Product/TransmissionLines';
// import Transformers from './Component/Product/Transformers';
import Switchyards from './Component/Product/Switchyards';
import Motorcontrols from './Component/Product/Motorcontrols';
import Meteringpanel from './Component/Product/Meteringpanel';
import Industrialpanels from './Component/Product/Industrialpanels';
import HospitalServices from './Component/Product/HospitalServices';
import Electricalinstallation from './Component/Product/ElectricalInstallation';
import Electricalanalytes from './Component/Product/Electricalanalytes';
import DGsets from './Component/Product/DGsets';
import CabelEarthing from './Component/Product/CableEarthing';
import APFCpanel from './Component/Product/APFCpanel';
import Amfpanels from './Component/Product/Amfpanels';
import ElectricalSubStations from './Component/Product/ElectricalSubStations';
import Electricpanel from './Component/Product/Electricpanel';
// import Distribution from './Component/Product/Distribution';
import SolarPanel from './Component/Product/SolarPanel';
import Clients from './Component/Clients/Clients';
import WaveLoader from './Component/Home/Loading';
// ..

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate an API request or any asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  AOS.init();
  return (
    <>
    {isLoading ? <WaveLoader/> :

     <ChakraProvider >
      {/* <CSSReset /> */}
    
<Router>
<SubNavbar/>
      <Navbar/>
  <Routes>
  
    <Route path="/home" element={<Home />} />
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/electrical-panel" element={<Electricpanel />} />
    {/* <Route path="/transmission-lines" element={<TransmissionLines />} /> */}
    {/* <Route path="/transformers" element={<Transformers />} /> */}
    <Route path="/earthing" element={<Switchyards />} />
    <Route path="/motor-controls" element={<Motorcontrols />} />
    <Route path="/metering-panel" element={<Meteringpanel />} />
    <Route path="/load-managements" element={<Industrialpanels />} />
    <Route path="/hospital-services" element={<HospitalServices />} />
    <Route path="/electrical-stations" element={<ElectricalSubStations />} />
    <Route path="/electrical-installation" element={<Electricalinstallation />} />
    <Route path="/electrical-quality" element={<Electricalanalytes />} />
    <Route path="/dg-synchronizing" element={<DGsets />} />
    <Route path="/cabling" element={<CabelEarthing />} />
    <Route path="/VFD-panel" element={<APFCpanel />} />
    <Route path="/amf-panels" element={<Amfpanels />} />
    <Route path="/breakers" element={<Product />} />
    {/* <Route path="/HT-LT-distribution-panel" element={<Distribution />} /> */}
    <Route path="/solar-panel" element={<SolarPanel />} />
    <Route path="/clients" element={<Clients />} />
   
  </Routes>
</Router>
</ChakraProvider>

}
</>
   
  );
}

export default App;
