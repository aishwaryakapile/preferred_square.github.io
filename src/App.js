import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import HeaderSolution from './component/HeaderSolution';

import { Routes, Route } from "react-router-dom";
// import { createBrowserHistory } from 'history';
//import Menu from './component/Menu';
import Home from './pages/Home';
import Solution from './pages/Solution';
import Knowledge from './pages/Knowledge';
import Service from './pages/Service';
import Contact from './pages/Contact';
import About from './pages/About';
import Managementconsulting from './pages/Managementconsulting';
import Financialadvisory from './pages/Financialadvisory';
import Dataanalyst from './pages/Dataanalyst';
import Career from './pages/Career';
import { Helmet } from 'react-helmet';
//import JobOpening from './component/Jobopeningheader';
import Jobopening from './pages/Jobopening';
// import Insight from './component/Insight';

// import Header from './component/Header';
// import Footer from "./component/Footer";
// import { Getintouch } from './component/Getintouch';
// import { Whyus } from './component/Whyus';
// import { Weserve } from './component/Weserve';
// import { ArrowSection } from './component/ArrowSection';

function App() {

  // const history = createBrowserHistory({
  //   //basename: "/staging/preferred-square"
  //   basename: "/"
  // });

  return (
    <>
    <Helmet>
      <title>Preferred Square</title>
      <meta name='description' content=''/>
      <meta name='keywords' content=''/>
    </Helmet>
    <div className="App">
{/* <Menu /> */}
{/* <BrowserRouter basename='/' history={history}> */}
      <Routes>
        <Route exact path="/" element={<Home />} >
          {/* <Route index element={<Home />} /> */}
          </Route>
          <Route exact path="about" element={<About />} />
          <Route exact path="solution" element={<Solution />} />
          <Route exact path="service" element={<Service />} />
          <Route exact path="knowledge" element={<Knowledge />} />
          <Route exact path="career" element={<Career />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="managementconsulting" element={<Managementconsulting/>} />
          <Route exact path="financialadvisory" element={<Financialadvisory/>} />
          <Route exact path="dataanalyst" element={<Dataanalyst/>} />        
          <Route exact path="jobopening" element={<Jobopening/>} />        
      </Routes>
    {/* </BrowserRouter> */}

      {/* <HeaderSolution /> */}
      {/* <Header />
      <ArrowSection />
      <Weserve />
      <Whyus />
      <Getintouch />
      <Footer /> */}
    </div>
    </>
  );
}

export default App;
