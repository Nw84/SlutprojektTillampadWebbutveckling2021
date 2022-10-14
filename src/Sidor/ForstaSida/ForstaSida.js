import React, { useState, useEffect } from 'react';

import {BrowserView, MobileView} from 'react-device-detect';

import './ForstaSida.css';

import Penna from '../../Components/Penna/Penna';
import PolaroidHog from '../../Components/PolaroidHog/PolaroidHog';
import Anteckningsblock from '../../Components/Anteckningsblock/Anteckningsblock';
import VisitKort from '../../Components/VisitKort/VisitKort'; 
import Moln1 from '../../Components/Moln/Moln1';
import Moln2 from '../../Components/Moln/Moln2';
import Moln3 from '../../Components/Moln/Moln3';
import Moln4 from '../../Components/Moln/Moln4';
import Info from '../../Components/Info/Info';
import Kompetens from '../../Components/Kompetens/Kompetens';
import Kontakt from '../../Components/Kontakt/Kontakt';


function ForstaSida() {
  const [offsetY, setOffsetY] = useState(0); 
  const handlescroll = () => setOffsetY(window.pageYOffset); 

  useEffect(() => {
    window.addEventListener("scroll", handlescroll);

    return () => window.removeEventListener("scroll", handlescroll); 
    }, []); 

  return (
    <>
    <BrowserView>
      <div className="Parallax">
        <div className="Parallax-bakgrund" style={{transform: `translateY(-${offsetY * 0.5}px)`}}>
            <div className="Parallax-Anteckning">
              <Anteckningsblock />
            </div>
            <div className="Parallax-Penna">
              <Penna />
            </div>
        </div>
        <div className="Parallax-forgrund" style={{ transform: `translateY(${offsetY * 0.85}px)` }}>
        </div>
          <div className="Parallax-innehall">
            <VisitKort />
            <PolaroidHog />
          </div>
          <Moln1 />
          <Moln2 />
          <Moln3 />
          <Moln4 />
          <div className="Parallax-info" style={{transform: `translateY(-${offsetY * 0.60}px)`}}>
          <Info />
          </div>      
          <div className="Parallax-kompetens" style={{transform: `translateY(-${offsetY * 0.80}px)`}}>
            <Kompetens />
          </div>
          <div className="Parallax-kontakt"style={{transform: `translateY(-${offsetY * 0.99}px)`}}>
            <Kontakt />
          </div>
      </div> 
     </BrowserView>
     <MobileView>
     <div className="Mobil-forstasida">
        <div className="Mobil-bakgrund">
            <div className="Mobil-Anteckning">
              <Anteckningsblock />
            </div>
            <div className="Mobil-Penna">
              <Penna />
            </div>
        </div>
        <div className="Mobil-forgrund">
          <div className="Mobil-moln1">
            <Moln1 />
          </div>
          <div className="Mobil-moln2">
            <Moln2 />
          </div>
          <div className="Mobil-moln3">
            <Moln3 />
          </div>
          <div className="Mobil-moln4">
            <Moln4 />
          </div>   
            <div className="Mobil-info">
            <Info />
            </div>      
            <div className="Mobil-kompetens">
              <Kompetens />
            </div>
            <div className="Mobil-kontakt">
              <Kontakt />
            </div>
          </div>
          <div className="Mobil-innehall">
            <VisitKort />
            <PolaroidHog />
          </div>
          
      </div> 
     </MobileView>
     </>
  );
}


export default ForstaSida;
