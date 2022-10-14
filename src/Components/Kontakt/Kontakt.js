import React from 'react'

import './Kontakt.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'

function Kontakt() {

    return (
        <div className="kontakt-wrapper" id="kontakt">
            <div className="kontakt-inrewrapper">
            <h1 className="kontakt-heading">Kontakt</h1>
                <div className="kontakt-ovre"> 
                    <div className="kontakt-ovreVanster">
                        <p>
                            Det finns flera sätt att kontakta mig 
                        </p>    
                    </div>
                    <div className="kontakt-ovreHoger">
                        <p><strong>Namn:</strong> Tobias Nordwall</p>
                        <p><strong>Ort:</strong> Karlstad</p>
                        <><strong>Mobil:</strong> 0734449959</>
                        <p><strong>Email:</strong> tobiasnordwall@gmail.com</p>

                    </div>
                </div>
                <div className="kontakt-nedre">
                    <a href="http://www.facebook.com" target="_blank" rel="noreferrer" a> 
                        <FaFacebookF/>
                    </a>
                    <a href="http://www.instagram.com" target="_blank" rel="noreferrer"> 
                        <FaInstagram/>
                    </a>
                    <a href="http://www.linkedin.com" target="_blank" rel="noreferrer"> 
                        <FaLinkedinIn/>
                    </a>
                    <a href="http://www.github.com" target="_blank" rel="noreferrer"> 
                        <FaGithub/>
                    </a>
                </div>
            </div>
        </div>
    ) 
}
export default Kontakt; 