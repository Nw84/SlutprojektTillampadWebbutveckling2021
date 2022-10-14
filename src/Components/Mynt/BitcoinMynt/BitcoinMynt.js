import React from 'react';
import { FaBitcoin} from 'react-icons/fa'
import { motion } from 'framer-motion';
import './BitcoinMynt.css';

function BitcoinMynt() {

    return (
        <motion.div className="Bitcoin-mynt" drag>
                <div className="Bitcoin-ikon">
                    <FaBitcoin/>
                </div>         
            </motion.div>
    );
}

export default BitcoinMynt; 
