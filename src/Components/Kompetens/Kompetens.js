import React from 'react'

import './Kompetens.css';

function Kompetens() {

    return (
        <div className="kompetens-wrapper" id="fardig">
            <div className="kompetens-inrewrapper">
                <div className="kompetens-ovre">
                    <h1 className="kompetens-heading">Mina Färdigheter</h1>
                    <p className="kompetens-subheading">Junior Webbutvecklare</p>
                    <div className="storStapel"></div>
                </div>
                <div className="kompetens-innehall">
                    <div className="kompetens-vanster">
                        <h2 className="kompetens-underrubrik">Mina färdigheter och kompetens</h2>
                        <p className="kompetens-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                           Duis non sapien hendrerit purus lobortis semper. 
                           Morbi cursus tellus in lobortis tincidunt. 
                           Donec sollicitudin metus id libero venenatis dignissim. 
                           Mauris molestie nibh sit amet enim porta malesuada. 
                           Curabitur vulputate pretium nibh non ultrices. </p>
                    </div>
                    <div className="kompetens-hoger">
                        <div className="kompetens-stapel">
                            <div className="kompetens-info">
                                <span>HTML</span>
                                <span>75%</span>
                            </div>
                            <div className="stapel html"></div>
                        </div>
                        <div className="kompetens-stapel">
                            <div className="kompetens-info">
                                <span>CSS</span>
                                <span>60%</span>
                            </div>
                            <div className="stapel css"></div>
                        </div>
                        <div className="kompetens-stapel">
                            <div className="kompetens-info">
                                <span>Javascript</span>
                                <span>40%</span>
                            </div>
                            <div className="stapel java"></div>
                        </div>
                        <div className="kompetens-stapel">
                            <div className="kompetens-info">
                                <span>mySQL</span>
                                <span>25%</span>
                            </div>
                            <div className="stapel mysql"></div>
                        </div>
                        <div className="kompetens-stapel">
                            <div className="kompetens-info">
                                <span>PHP</span>
                                <span>15%</span>
                            </div>
                            <div className="stapel php"></div>
                        </div>
                        <div className="kompetens-stapel">
                            <div className="kompetens-info">
                                <span>React</span>
                                <span>35%</span>
                            </div>
                            <div className="stapel react"></div>
                        </div>

                    </div>
                </div>

            </div>
    
        </div>
    );
}

export default Kompetens; 