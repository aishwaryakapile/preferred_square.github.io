import React from 'react'
import Menu from '../component/Menu';
import Buspotential from '../component/Buspotential'
import Getintouch2 from '../component/Getintouch2'
import Footer from '../component/Footer'
import Whoweserve from '../component/Whoweserve'
//import Wehelp from '../component/Wehelp'
import Financialadheader from '../component/Financialadheader'
import Whatwedo1 from '../component/Whatwedo1'
import { Helmet } from 'react-helmet';

const Financialadvisory = () => {
    const paragraph = "Arranging and allocating financial resources to maximize profitability and drive sustainable growth is complex and challenging. Our team of seasoned financial consultants combine years of industry expertize with analytical rigour to create custom solutions that will help you navigate complex financial challenges, seize opportunities and make informed decisions."
    return (
        <>
            <Helmet>
                <title>Financial Advisory-Preferred Square</title>
                <meta name='description' content='' />
                <meta name='keywords' content='' />
            </Helmet>
            <Menu />
            <Financialadheader />
            <Buspotential paragraph={paragraph} />
            <Whatwedo1 />
            <Whoweserve />
            <Getintouch2 />
            <Footer />
        </>
    )
}

export default Financialadvisory