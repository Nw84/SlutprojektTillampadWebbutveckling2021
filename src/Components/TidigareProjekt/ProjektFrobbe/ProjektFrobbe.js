import React from 'react'

import './ProjektFrobbe.css';

function ProjektFrobbe () {
    return (
        <div className="Frobbe-Kontainer">
            <h2>Quiz spel i React</h2>
            <div className="Kontainer-inre">
                <div className="Frobbe-vanster">
                    <p>
                        I kursen Javascriptramverk fick vi i uppgift att göra en app i antingen Vue, Angular eller React. Jag valde att göra ett quizspel i React
                        där man kan välja antingen slumässiga frågor som hämtas ifrån OpenTrivia API eller ett quiz som jag gjort och sparat lokalt som en json fil.
                    </p>
                    <p>
                    Det var ett kul projekt och jag fick bland annat lära mig mer om React-router-dom, useEffect och hooks mm. Jag önskar
                    bara att jag hade haft lite mer tid till det grafiska, för designen blev lite platt. 
                    <a href="https://webbkurs.ei.hv.se/~tono0008/React/" target="_blank" rel="noreferrer" style={{color: '#e2af38'}}>Klick här för att testa spelet</a>
                    </p>
                </div>
                <div className="Frobbe-hoger">
                    <a className="Projekt-Frobbe" href="https://webbkurs.ei.hv.se/~tono0008/React/" alt="Bild ifrån mitt quizspel" target="_blank" rel="noreferrer"></a>
    
                </div>
            </div>
            <div className="Frobbe-Streck"></div>
        </div>  
    )
}

export default ProjektFrobbe; 