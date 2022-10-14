import React from 'react'

import './JavascriptSpel.css';

function JavascriptSpel () {
    return (
        <div className="JavascriptSpel-Kontainer">
            <h2>Plattformsspel i Javascript</h2>
            <div className="Kontainer-inre">
                <div className="JavascriptSpel-vanster">
                    <a className="Projekt-JavascriptSpel" href="https://webbkurs.ei.hv.se/~tono0008/JavascriptSpel" alt="Bild ifrån mitt Javascriptspel" target="_blank" rel="noreferrer"></a>
                </div>
                <div className="JavascriptSpel-hoger">
                    <p>
                        I kursen Grundläggande Javascriptsprogrammering fick vi i uppgift att göra ett program eller spel i slutuppgift. Jag valde att göra ett 
                        plattformsspel, där man ska samla äpplen som slumpmässigt genereras och samtidigt undvika kometer. 
                    </p>
                    <p>
                        Det var en riktigt rolig uppgift och jag lärde mig en hel del om kolisionshantering, grafik och grunderna i hur man gör ett spel.
                        <a href="https://webbkurs.ei.hv.se/~tono0008/JavascriptSpel" target="_blank" rel="noreferrer" style={{color: '#e2af38'}}>Klick här för att testa spelet</a>
                    </p>
                </div>
            </div>
            <div className="JavascriptSpel-Streck"></div>
        </div>  
    )
}

export default JavascriptSpel; 