import React from 'react';
import { FaEthereum} from 'react-icons/fa'
import { motion } from 'framer-motion';
import './EthereumMynt.css';

function EthereumMynt() {

    return (
            <motion.div className="Ethereum" drag> 
                        <FaEthereum/>
                </motion.div>
    );
}

export default EthereumMynt; 
