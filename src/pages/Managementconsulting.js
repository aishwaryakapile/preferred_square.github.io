import React from 'react'
import Menu from '../component/Menu';
import Managementconheader from '../component/Managementconheader'
import Buspotential from '../component/Buspotential'
import Getintouch2 from '../component/Getintouch2'
import Footer from '../component/Footer'
import Whoweserve from '../component/Whoweserve'
import Wehelp from '../component/Wehelp'
import { Helmet } from 'react-helmet';

const Managementconsulting = () => {
  const paragraph="We are passionate about helping businesses thrive in today's dynamic and competitive landscape. With our deep expertise and commitment to excellence, we offer strategic guidance and transformative solutions that drive tangible results. As a trusted partner, we work closely with our clients to understand their unique challenges and craft tailored strategies to unlock their true potential."
  return (
    <>
    <Helmet>
            <title>Management Consulting-Preferred Square</title>
            <meta name='description' content='' />
            <meta name='keywords' content='' />
          </Helmet>
    <Menu />
    <Managementconheader/>
    <Buspotential  paragraph={paragraph}/>
    <Wehelp/>
    <Whoweserve/>
    <Getintouch2 />
        <Footer />
    </>
  )
}

export default Managementconsulting