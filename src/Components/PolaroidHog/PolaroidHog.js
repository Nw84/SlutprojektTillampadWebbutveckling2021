import React from 'react'
import {BrowserView, MobileView} from 'react-device-detect';

import './PolaroidHog.css'; 
import bild1 from '../../Assets/bilder/miami.jpg';
import bild2 from '../../Assets/bilder/fjall2.jpg';
import bild3 from '../../Assets/bilder/jag.jpg';
import bild4 from '../../Assets/bilder/hopp.jpg'
import bild5 from '../../Assets/bilder/prag.jpg'
import bild6 from '../../Assets/bilder/khaoSok.jpg'; 
import bild7 from '../../Assets/bilder/labadee.jpg';
import bild8 from '../../Assets/bilder/koThao.jpg';

import mobilbild1 from '../../Assets/mobil-bilder/miami-mobil.jpg';
import mobilbild2 from '../../Assets/mobil-bilder/fjall2-mobil.jpg';
import mobilbild3 from '../../Assets/mobil-bilder/jag-mobil.jpg';
import mobilbild4 from '../../Assets/mobil-bilder/hopp-mobil.jpg';
import mobilbild5 from '../../Assets/mobil-bilder/prag-mobil.jpg';
import mobilbild6 from '../../Assets/mobil-bilder/khaoSok-mobil.jpg';
import mobilbild7 from '../../Assets/mobil-bilder/labadee-mobil.jpg';
import mobilbild8 from '../../Assets/mobil-bilder/koThao-mobil.jpg';

function Polaroid() {

    return (
        <>
        <BrowserView>
            <div className="Wrapper">
                <div className="item-bild7">
                    <div className="polaroid-bild7">
                        <img src={bild8} alt=""/>
                        <div className="caption-bild7">Ko Thao</div>
                    </div>
                </div>
                <div className="item-hog">
                    <div className="polaroid-hog">
                        <img src={bild1} alt=""/>
                        <div className="caption-hog">Miami</div>
                    </div>
                </div>
                <div className="item-bild1">
                    <div className="polaroid-bild1">
                        <img src={bild2} alt=""/>
                        <div className="caption-bild1">Idre Fjäll</div>
                    </div>
                </div>
                <div className="item-bild6">
                    <div className="polaroid-bild6">
                        <img src={bild7} alt=""/>
                        <div className="caption-bild6">Labadee</div>
                    </div>
                </div>
                <div className="item-bild2">
                    <div className="polaroid-bild2">
                        <img src={bild5} alt=""/>
                        <div className="caption-bild2">Prag</div>
                    </div>
                </div>
                <div className="item-bild3">
                    <div className="polaroid-bild3">
                        <img src={bild3} alt=""/>
                        <div className="caption-bild3">Key West</div>
                    </div>
                </div>
                <div className="item-bild4">
                    <div className="polaroid-bild4">
                        <img src={bild4} alt=""/>
                        <div className="caption-bild4">Gran Canaria</div>
                    </div>
                </div>
                <div className="item-bild5">
                    <div className="polaroid-bild5">
                        <img src={bild6} alt=""/>
                        <div className="caption-bild5">Khao Sok</div>
                    </div>
                </div>
            </div>
         </BrowserView>
         <MobileView>
             <div className="Wrapper">
                <div className="item-bild7">
                    <div className="polaroid-bild7">
                        <img src={mobilbild8} alt=""/>
                        <div className="caption-bild7">Ko Thao</div>
                    </div>
                </div>
                <div className="item-hog">
                    <div className="polaroid-hog">
                        <img src={mobilbild1} alt=""/>
                        <div className="caption-hog">Miami</div>
                    </div>
                </div>
                <div className="item-bild1">
                    <div className="polaroid-bild1">
                        <img src={mobilbild2} alt=""/>
                        <div className="caption-bild1">Idre Fjäll</div>
                    </div>
                </div>
                <div className="item-bild6">
                    <div className="polaroid-bild6">
                        <img src={mobilbild7} alt=""/>
                        <div className="caption-bild6">Labadee</div>
                    </div>
                </div>
                <div className="item-bild2">
                    <div className="polaroid-bild2">
                        <img src={mobilbild5} alt=""/>
                        <div className="caption-bild2">Prag</div>
                    </div>
                </div>
                <div className="item-bild3">
                    <div className="polaroid-bild3">
                        <img src={mobilbild3} alt=""/>
                        <div className="caption-bild3">Key West</div>
                    </div>
                </div>
                <div className="item-bild4">
                    <div className="polaroid-bild4">
                        <img src={mobilbild4} alt=""/>
                        <div className="caption-bild4">Gran Canaria</div>
                    </div>
                </div>
                <div className="item-bild5">
                    <div className="polaroid-bild5">
                        <img src={mobilbild6} alt=""/>
                        <div className="caption-bild5">Khao Sok</div>
                    </div>
                </div>
            </div>

         </MobileView>
         </>
    )
}

export default Polaroid; 
