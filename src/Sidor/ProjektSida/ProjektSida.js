import React from 'react';
import { motion } from 'framer-motion';

import Balong from '../../Components/Balong/Balong';
import BitcoinMynt from '../../Components/Mynt/BitcoinMynt/BitcoinMynt';
import EthereumMynt from '../../Components/Mynt/BitcoinMynt/EthereumMynt';
import '../ProjektSida/ProjektSida.css';
import ProjektFrobbe from '../../Components/TidigareProjekt/ProjektFrobbe/ProjektFrobbe';
import SmartContract from '../../Components/TidigareProjekt/SmartContract/SmartContract';
import JavascriptSpel from '../../Components/TidigareProjekt/JavascriptSpel/JavascriptSpel';

function ProjektSida () {

    return (
        <>
    <div className="Ovre-Sektion">
        <div className="Kontainer-inre">
            <div className="Kolumn-vanster">
                <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition= {{ duration: 2.5}}
                drag
                
                >Projekt
                </motion.h1>

                <motion.p className="underRubrik"
                initial={{ opacity: 0, x: -200}}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2.5}}
                
                >Här kan du titta på mina tidigare projekt och läsa om vad jag arbetar med nu
                </motion.p>
            </div>
            <div className="Kolumn-hoger">
                <motion.div className="Balong1" 
                initial= {{ opacity: 0, y: 1000 }}
                animate={{ opacity: 1, y: 200, transition: { duration: 3.5}}}
                >
                    <Balong/>
                </motion.div>
                <motion.div className="Bitcoin">
                    <BitcoinMynt/>
                </motion.div>
                <motion.div className="Ethereum"
                initial= {{ opacity: 0, y: -1000 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 2}}}
                >
                    <EthereumMynt/>
                </motion.div>
            </div>

        </div>
    </div>
    <div className="Nedre-Sektion">
    <motion.div className="Nedre-Streck"
    initial= {{ opacity: 0, x: 2500 }}
    animate={{ opacity: 1, x: 0, transition: { duration: 5.5 }}}
    ></motion.div>
            <ProjektFrobbe />
            <SmartContract />
            <JavascriptSpel />
    </div>
    </>
    );
}

export default ProjektSida; 