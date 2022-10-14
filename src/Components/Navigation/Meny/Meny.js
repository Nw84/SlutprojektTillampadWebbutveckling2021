import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Meny.css'; 

//Min popup meny dar jag anvander hashlink ifran react-router-hash-link for att navigera mellan sidorna och till sektioner av första sidan och 
// sen har jag props.closed pa onclick for att stanga menyn 


const meny = (props) => {

    return (
        <div className="Meny">
            <div className="StangKnapp">
            <button className="Knapp" onClick={props.closed}>
                Stäng Menyn
            </button>
            </div>
        <h2>
            <Link to ="/#top" className="NavigationsLank" onClick={props.closed} >Hem</Link> 
        </h2>
        <h4>
            <Link className="UnderNavigationsLank" onClick={props.closed} to="/#info" >Information</Link>
        </h4>
        <h4>
            <Link className="UnderNavigationsLank" onClick={props.closed} to="/#fardig" >Färdigheter</Link>
        </h4>
        <h4>
            <Link className="UnderNavigationsLank" onClick={props.closed} to="/#kontakt" >Kontakt</Link>
        </h4>
        <h2>
            <Link to ="/projekt#top" className="NavigationsLank" onClick={props.closed}>Projekt</Link>
        </h2>
        </div>
    );
    
};

export default meny;