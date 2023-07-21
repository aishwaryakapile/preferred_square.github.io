import React, { useRef, useState, useEffect } from 'react';

// load 'scrambling-text' module.
import Scrambler from 'scrambling-text';

const ScramblingText = () => {

 
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

// const handleScramble = (text) => {
//   document.getElementById('text').innerHTML = text;
// }
// let i = 0;
// function printText() {
//   Scrambler.scramble(TEXTS[i % TEXTS.length], handleScramble); 
//   setTimeout(printText, 5000);
//   i++;
// }
// printText();


//const [text, setText] = useState('- Friedrich Nietzsche -');
//const [text1, setText1] = useState('- CSSScript.Com -');
const [count, setCount] = useState('');
const [counttext, setCounttext] = useState('');


// create an instance of Scrambler using useRef.
const scramblerCount1 = useRef(new Scrambler());
const scramblerCountText1 = useRef(new Scrambler());
const scramblerCount2 = useRef(new Scrambler());
const scramblerCountText2 = useRef(new Scrambler());
const scramblerCount3 = useRef(new Scrambler());
const scramblerCountText3 = useRef(new Scrambler());

function printtext() {
  scramblerCount1.current.scramble(COUNTS[0], setCount);
  scramblerCountText1.current.scramble(COUNTTEXTS[0], setCounttext);

  setTimeout(() => {
    scramblerCount2.current.scramble(COUNTS[1], setCount);    
    scramblerCountText2.current.scramble(COUNTTEXTS[1], setCounttext);    
  }, 2000);

  setTimeout(() => {
    scramblerCount3.current.scramble(COUNTS[2], setCount);    
    scramblerCountText3.current.scramble(COUNTTEXTS[2], setCounttext);    
  }, 4000);

  setTimeout(() => {
    printtext();
  }, 8000);
}

useEffect(() => {
  printtext();

}, []);


  return (
    <div>
        Scrambler text 
        {count} <br />
        {counttext}
    </div>
  )
}

export default ScramblingText
