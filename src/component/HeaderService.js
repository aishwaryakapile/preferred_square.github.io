import React, { useRef, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Scrambler from 'scrambling-text';
import "./headerservice.css";

const HeaderService = () => {


  // scramble text

  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const TEXT1 = [
    'Business',
    'Long-Term',
    'Data-Driven',
  ];


  const TEXT2 = [
    'Growth',
    'Value Creation',
    'Decision Making ',
  ];


  //const scnum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '+'];
  const scaplha = ['a', 'b', 'c', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  // create an instance of Scrambler using useRef.
  const scramblerText11 = useRef(new Scrambler());
  const scramblerText12 = useRef(new Scrambler());
  const scramblerText21 = useRef(new Scrambler());
  const scramblerText22 = useRef(new Scrambler());
  const scramblerText31 = useRef(new Scrambler());
  const scramblerText32 = useRef(new Scrambler());

  function printtext() {

    setTimeout(() => {
      scramblerText11.current.scramble(TEXT1[0], setText1, {
        characters: scaplha,
      });
      scramblerText12.current.scramble(TEXT2[0], setText2, {
        characters: scaplha,
      });
    }, 500);

    setTimeout(() => {
      scramblerText21.current.scramble(TEXT1[1], setText1, {
        characters: scaplha,
      });
      scramblerText22.current.scramble(TEXT2[1], setText2, {
        characters: scaplha,
      });
    }, 3500);

    setTimeout(() => {
      scramblerText31.current.scramble(TEXT1[2], setText1, {
        characters: scaplha,
      });
      scramblerText32.current.scramble(TEXT2[2], setText2, {
        characters: scaplha,
      });
    }, 7000);

    setTimeout(() => {
      printtext();
    }, 12000);
  }

  useEffect(() => {
    printtext();

  }, []);



  return (
    <>
        
    <header className='header-service'> 
     {/* <div className='animation-gradient'></div>      */}
     <div className='animation-svg'>
      {/* <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      <defs>
      <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5"><animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stopColor="rgba(255, 0, 255, 1)"></stop><stop offset="100%" stopColor="rgba(255, 0, 255, 0)"></stop></radialGradient>
      <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5"><animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stopColor="rgba(255, 255, 0, 1)"></stop><stop offset="100%" stopColor="rgba(255, 255, 0, 0)"></stop></radialGradient>
      <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5"><animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stopColor="rgba(0, 255, 255, 1)"></stop><stop offset="100%" stopColor="rgba(0, 255, 255, 0)"></stop></radialGradient>
      <radialGradient id="Gradient4" cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5"><animate attributeName="fx" dur="23s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stopColor="rgba(0, 255, 0, 1)"></stop><stop offset="100%" stopColor="rgba(0, 255, 0, 0)"></stop></radialGradient>
      <radialGradient id="Gradient5" cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5"><animate attributeName="fx" dur="24.5s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stopColor="rgba(0,0,255, 1)"></stop><stop offset="100%" stopColor="rgba(0,0,255, 0)"></stop></radialGradient>
      <radialGradient id="Gradient6" cx="50%" cy="50%" fx="0.981338%" fy="50%" r=".5"><animate attributeName="fx" dur="25.5s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stopColor="rgba(255,0,0, 1)"></stop><stop offset="100%" stopColor="rgba(255,0,0, 0)"></stop></radialGradient>
      </defs>
      <rect x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(334.41 50 50)"><animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="7s" repeatCount="indefinite"></animateTransform></rect>
      <rect x="-2.17916%" y="35.4267%" width="100%" height="100%" fill="url(#Gradient2)" transform="rotate(255.072 50 50)"><animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s" repeatCount="indefinite"></animateTransform>
      </rect>
      <rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)" transform="rotate(139.903 50 50)"><animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate><animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="9s" repeatCount="indefinite"></animateTransform>
      </rect>
      </svg> */}
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
        <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5"><animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stopColor="rgba(	241,	21,	118, 1)"></stop><stop offset="100%" stopColor="rgba(241,	21,	118, 0)"></stop></radialGradient>
        <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5"><animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stopColor="rgba(249,	245,	170, 1)"></stop><stop offset="100%" stopColor="rgba(249,	245,	170, 0)"></stop></radialGradient>
        <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5"><animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stopColor="rgba(1,	198,	178, 1)"></stop><stop offset="100%" stopColor="rgba(1,	198,	178, 0)"></stop></radialGradient>
        <radialGradient id="Gradient4" cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5"><animate attributeName="fx" dur="23s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stopColor="rgba(241,	21,	118, 1)"></stop><stop offset="100%" stopColor="rgba(241,	21,	118, 0)"></stop></radialGradient>
        <radialGradient id="Gradient5" cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5"><animate attributeName="fx" dur="24.5s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stopColor="rgba(249,	245,	170, 1)"></stop><stop offset="100%" stopColor="rgba(249,	245,	170, 0)"></stop></radialGradient>
        <radialGradient id="Gradient6" cx="50%" cy="50%" fx="0.981338%" fy="50%" r=".5"><animate attributeName="fx" dur="25.5s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stopColor="rgba(1,	198,	178, 1)"></stop><stop offset="100%" stopColor="rgba(1,	198,	178, 0)"></stop></radialGradient>
        </defs>
        <rect x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(334.41 50 50)"><animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="7s" repeatCount="indefinite"></animateTransform></rect>
        <rect x="-2.17916%" y="35.4267%" width="100%" height="100%" fill="url(#Gradient2)" transform="rotate(255.072 50 50)"><animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s" repeatCount="indefinite"></animateTransform>
        </rect>
        <rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)" transform="rotate(139.903 50 50)"><animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate><animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="9s" repeatCount="indefinite"></animateTransform>
        </rect>
        </svg>
    </div>

      <Container fluid className='hero px-5 pt-3'>
      
      {/* hero */}

      {/* <div className='hero-text d-flex justify-content-center min-vh-100 align-middle mx-auto my-auto'> */}
      
      <div className='hero-content'>
          
          <div className='hero-text'>
              <h4>Enabling</h4>
              <h3>{text1}</h3>
              <h2>{text2}</h2>
          </div>
      </div>

      </Container>
    </header>
    </>
  )
}

export default HeaderService