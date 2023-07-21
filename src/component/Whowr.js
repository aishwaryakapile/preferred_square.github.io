import React, {useEffect, useState } from 'react';
import "./whowr.css";
import { Row, Col, Container } from 'react-bootstrap';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from 'gsap/TextPlugin';
import Scrambler from 'scrambling-text';
//import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

//import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble';
import whowr_bg from '../images/whowr-bg.webp'; 


gsap.registerPlugin(ScrollTrigger, TextPlugin);

 

export const Whowr = () => {

    const [sktext, setSktext] = useState("Preferred Square is a trusted boutique consulting firm specializing in offshore corporate advisory and business analytics solutions. From family offices  to hedge fund managers and real estate developers to PE/VC firms, we offer custom-designed solutions for a diverse set of industries. We strive to be your second-order thinkers providing crucial support for informed decision-making in both strategy and investments.");


     useEffect(() => { 

        let sktext = "Preferred Square is a trusted boutique consulting firm specializing in offshore corporate advisory and business analytics solutions. From family offices  to hedge fund managers and real estate developers to PE/VC firms, we offer custom-designed solutions for a diverse set of industries. We strive to be your second-order thinkers providing crucial support for informed decision-making in both strategy and investments.";    
        let arr = sktext.split(' ');
        let result = '<span class="rotate"> ' +
                    arr.join(' </span><span class="rotate">') + 
                    '</span>';
        setSktext(result);
        
      },[sktext]); 


    //   const count = useRef();
    //   const counttext = useRef();

    //   useLayoutEffect(() => {
    //     let ctx = gsap.context(() => {
    //         count.current = gsap
    //       // use scoped selectors
    //      // gsap.to(count.current, { rotation: 360 });
    //       // or refs
    //       //gsap.to(counttext.current, {duration: 3, rotation: 360 });
      

    //       gsap.to(counttext.current, {duration: 3, 
    //         scrambleText:"300px"
        
    //         }, '+=3');
    //       gsap.to(counttext.current, { text:"ONE" } ,'+=3');
      

    //      gsap.to(counttext.current, {duration: 3, scrambleText:{text:"ONE"}});
      

    //     //  let tl = gsap.timeline({defaults: {duration: 2, ease: "none"}});
    //     //  tl.to(count.current, {duration: 3, scrambleText:{text:"ONE"}},'+=3');
    //     //  tl.to(counttext.current, {duration: 3, scrambleText:{text:"TWO"}},'+=2');
 

    //       //var tl = gsap.timeline({repeat:-1, repeatDelay:2, defaults: {duration: 2, ease: "none"}})
       
                        
    //     }, []);
        
    //     return () => ctx.revert();
    //   }, []);
    


    

      // const cn: ScrambleTexts = [
      //   '125+',
      //   '1000+',
      //   '500+'
      // ]

      


    //   const ctext: ScrambleTexts = [
    //     'Successful Engagements',
    //     'Clients Served',
    //     'Projects Deployed'
    //   ]


    useEffect(()=>{

        gsap.to(".whowrbg", {
            left: 0,
            duration: 5,
            delay: 2,
            scrollTrigger: {
                ease: "power1.out",
                trigger: ".whowrbg",
            //   markers: true,
              start: "top bottom",
              end: "bottom bottom",
              scrub: 5
            }
          });

          //let tl = gsap.timeline({defaults: {duration: 2, ease: "none"}});
          // let tl = gsap.timeline({repeat:-1, repeatDelay:0, speed:0.2, defaults: {duration: 2, ease: "none"},     scrollTrigger: {
          //   ease: "power1.out",
          //   trigger: ".whowrbg",
          //   // markers: true,
          //   start: "bottom bottom",
          //   scrub: false
          //  }})
          
          //  let t2 = gsap.timeline({repeat:-1, repeatDelay:0, speed:0.2, defaults: {duration: 2, ease: "none"},     scrollTrigger: {
          //   ease: "power1.out",
          //   trigger: ".whowrbg",
          //   // markers: true,
          //   start: "bottom bottom",
          //   scrub: false
          //  }})
         
         
           gsap.to(".counter", {
            opacity: 1,
            duration: 0.1,
            delay: 0,
            scrollTrigger: {
              trigger: ".whowrbg",
              //  markers: true,
              start: "top center",
              scrub: false
            }
          });  
 

          // tl.to(".count", {
          //   text: "125+",
          //   chars:"lowerCase", 
          //   type: "diff",
          //   revealDelay:0.5,
          //   delay: 1,
          //   speed:0.1,
          //   tweenLength:false
          // }); 

      
          // tl.to(".count", {
          //   delimiter: "1234567890", 
          //   text: "1000+",
          //   delay: 5,
          //   speed:0.4,
          //   padSpace: true,
          //   tweenLength:true
          // });

     
          // tl.to(".count", {
          //   delimiter: "1234567890", 
          //   text: "500+",
          //   delay: 5,
          //   speed:0.4,
          //   padSpace: true,
          //   tweenLength:true
          // });


          // t2.to(".counttext", {
          //   delimiter: "1234567890", 
          //   text: "Successful Engagements",
          //   delay: 1,
          //   speed:0.1,
          //   tweenLength:true
          // }); 

     
          // t2.to(".counttext", {
          //   delimiter: "1234567890", 
          //   text: "Clients Served",
          //   delay: 5,
          //   speed:0.4,
          //   padSpace: true,
          //   tweenLength:true
          // });

   

          // t2.to(".counttext", {
          //   delimiter: "1234567890", 
          //   text: "Projects Deployed",
          //   delay: 5,
          //   speed:0.4,
          //   padSpace: true,
          //   tweenLength:true
          // });



    },[])


 const scrambler = new Scrambler();
 const scrambler2 = new Scrambler();
  const [count, setCount] = useState();
  const [counttext, setCounttext] = useState();

  const COUNTS = [
    '125+',
    '1000+',
    '500+',
  ];


  const COUNTTEXTS = [
    'Successful Engagements',
    'Clients Served',
    'Projects Deployed',
  ];


  useEffect(()=> {


    //  scramble text 1 (count) start
    const handleScramble = (text) => {
      setCount(text);
    }
  
    const handleScramble2 = (text) => {
      setCounttext(text);
    }
  
    let i = 0;
    //let chars = ['A', 'B', 'C','D', 'C', 'E','F', 'G', 'H','I', 'J', 'K','L', 'M', 'N','O', 'P', 'Q','R', 'S', 'T','U', 'V', 'W','X', 'X', 'Z'];
    
    function printText() {
      const targetText = COUNTS[i % COUNTS.length];
      const targetText2 = COUNTTEXTS[i % COUNTTEXTS.length];
      if (i++ % 3 === 2) {
        scrambler.scramble(targetText, handleScramble, {
          characters: '!<>-_\\/[]{}—=+*^?#________',
        });
  
        scrambler2.scramble(targetText2, handleScramble2, {
          characters: '!<>-_\\/[]{}—=+*^?#________',
        });
      } else {
        scrambler.scramble(targetText, handleScramble);
        scrambler2.scramble(targetText2, handleScramble2);
      }
      setTimeout(printText, 4000);
    }
    printText();

  },[]) 

   
  return (
    <>
      

<section className='whowr-section' style={{background:`url(${whowr_bg}) no-repeat`}} >
    <div className='whowrbg'></div>
        <Container fluid>
            <Row className=' '>

            <Col className='col-md-4 offset-2 pt-5'>
                
                <div className='counter pt-5'>
                    <h2 className='count'  > 
                    {count}
                    {/* <TextScramble texts={cn} letterSpeed={1000} nextLetterSpeed={1000} pauseTime={2500} /> */}
                    </h2>
                    <h4 className='counttext' >
                      {counttext}
                    {/* <TextScramble texts={ctext} letterSpeed={1600} nextLetterSpeed={1000}  pauseTime={2500}/> */}
                    </h4>
                </div>
                
        </Col>

                <Col className='col-md-5 pe-5'>
                    <div className='content-box'>
                            <h2>Who</h2>
                            <div className="strok">We Are</div>
                            <div className="h1 anima">We <span className='anima-underline'>Are</span></div>
                
                            <p className='mt-3 holder' dangerouslySetInnerHTML={{__html: sktext}}></p>
                    </div> 

                    

                </Col>

                
            </Row>
        </Container>

</section>
    </>
  )
}

