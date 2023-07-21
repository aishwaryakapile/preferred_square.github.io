import React from 'react'
import Menu from '../component/Menu';
import Buspotential from '../component/Buspotential'
import Getintouch2 from '../component/Getintouch2'
import Footer from '../component/Footer'
import Whoweserve from '../component/Whoweserve'
//import Wehelp from '../component/Wehelp'
import Dataanalystheader from '../component/Dataanalystheader'
import Whatwedo2 from '../component/Whatwedo2'
import { Helmet } from 'react-helmet';

const Dataanalyst = () => {
    const paragraph="We understand that data plays a critical role in strategic business decisions. Our tailored analytics solutions leverage advanced techniques and cutting-edge artificial intelligence and machine learning technology to extract valuable insights from complex datasets, enabling our clients to optimize operations, identify trends, and drive strategic initiatives."
    return (
        <>
       <Helmet>
            <title>Data Analyst-Preferred Square</title>
            <meta name='description' content='' />
            <meta name='keywords' content='' />
          </Helmet>
            <Menu />
            <Dataanalystheader/>
            <Buspotential paragraph={paragraph}/>
            <Whatwedo2 />
            <Whoweserve />
            <Getintouch2 />
            <Footer />
        </>
    )
}

export default Dataanalyst