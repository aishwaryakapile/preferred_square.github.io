import React from 'react'
import Menu from '../component/Menu';
import Header from '../component/Header';
import Footer from "../component/Footer";
import { Getintouch } from '../component/Getintouch';
import { Whyus } from '../component/Whyus';
import { Weserve } from '../component/Weserve';
//import { Whowr } from './component/Whowr';
//import { Wherewd } from './component/Wherewd';
import { ArrowSection } from '../component/ArrowSection';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
     <Helmet>
      <title>Home-Preferred Square</title>
      <meta name='description' content=''/>
      <meta name='keywords' content=''/>
    </Helmet>
      <Menu />
      <Header />
      <ArrowSection />
      <Weserve />
      <Whyus />
      <Getintouch />
      <Footer />
    </>
  )
}

export default Home