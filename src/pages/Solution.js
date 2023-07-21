import React from 'react'
import Menu from '../component/Menu';
import HeaderSolution from '../component/HeaderSolution'
import SolutionDes from '../component/SolutionDes'
import SolutionBox from '../component/SolutionBox'
import Getintouch2 from '../component/Getintouch2'
import Footer from '../component/Footer'
import { Helmet } from 'react-helmet';

const Solution = () => {
  return (
    <>
      {/* <Parent> */}
        <Helmet>
          <title>Who we serve-Preferred Square</title>
          <meta name='description' content='' />
          <meta name='keywords' content='' />
        </Helmet>
        {/* <Children>
          
        </Children> */}
      {/* </Parent> */}
      <Menu />
      <HeaderSolution />
      <SolutionDes />
      <SolutionBox />
      <Getintouch2 />
      <Footer />
    </>
  )
}

export default Solution