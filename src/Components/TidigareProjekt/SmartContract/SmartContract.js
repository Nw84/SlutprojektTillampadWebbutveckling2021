import React from 'react'

import './SmartContract.css';

function SmartContract () {
    return (
        <div className="Smart-Kontainer">
            <h2>Mitt första Smart Contract i Solidity</h2>
            <div className="Kontainer-inre">
                <div className="Smart-vanster">
                    <a className="Projekt-Smart" href="#" alt="Bild som visualiserar ett smart contract och Ethereum"></a>
                </div>
                <div className="Smart-hoger">
                    <p>
                        Jag började intressera mig för Bitcoin och Ethereum för ungefär 5 år sedan, så det var ganska naturligt att jag skulle försöka lära mig 
                        Solidity nu när jag börjat lära mig grunderna i programmering. 
                    </p>
                    <p>
                        Solidity är ett programmeringsspråk som används för att skapa smart contracts till Ethereum blockkedjan och jag har under dom senaste veckorna
                        börjat lära mig språket och jag nu skapat mitt första smart contract. 
                    </p>
                </div>
            </div>
            <div className="Smart-Streck"></div>
        </div>  




    )
}

export default SmartContract; 