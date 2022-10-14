import React from 'react';
import { FaReact} from 'react-icons/fa'
import { motion } from 'framer-motion';
import './Balong.css';

function Balong() {

    return (
            <motion.div className="Balong" drag> 
                <div className="ikon">
                        <FaReact/>
                    </div>
                <div className="snore"></div>
            </motion.div>
    );
}

export default Balong; 
