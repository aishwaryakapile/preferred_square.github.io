import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';
//import { ScrollTrigger } from 'gsap/ScrollTrigger';
//import "./gsap.css";



export const Gsap = () => {

    //gsap.registerPlugin(ScrollTrigger);

    const main = useRef();
    
      // useLayoutEffect(() => {
      //   const ctx = gsap.context((self) => {
      //     const boxes = self.selector('.box');
      //     boxes.forEach((box) => {
      //       gsap.to(box, {
      //         x: 150,
      //         scrollTrigger: {
      //           trigger: box,
      //           start: 'bottom bottom',
      //           end: 'top 20%',
      //           scrub: true,
      //           markers:true,
      //         },
      //       });
      //     });
      //   }, main); // <- Scope!
      //   return () => ctx.revert(); // <- Cleanup!
      // }, []);

      const app = useRef();
      const circle = useRef();
      
      useLayoutEffect(() => {
        let ctx = gsap.context(() => {
          // use scoped selectors
          gsap.to(".box", { rotation: 360 });
          // or refs
          gsap.to(circle.current, { rotation: 360 });
          
        }, app);
        
        return () => ctx.revert();
      }, []);
    

        useLayoutEffect(() => {
        let ctx = gsap.context(() => {
          // use scoped selectors
          gsap.to(".box", { rotation: 360 });
          // or refs
          gsap.to(circle.current, { rotation: 360 });
          
        }, app);
        
        return () => ctx.revert();
      }, []);

  return (
    <div>

    <div ref={app} className="App">
      <div className="box">selector</div>
      <div className="circle" ref={circle}>Ref</div>
    </div>

    <section className="section flex-center column">
      <h1>Basic ScrollTrigger with React</h1>
      <h2>Scroll down to see the magic happen!!</h2>
    </section>
    <div className="section flex-center column">
      <div className="box">box</div>
      <div className="box">box</div>
      <div className="box">box</div>
    </div>
    <section className="section"></section>
  </div>
  )
}
