import React from 'react'

import './Info.css';

function Info() {

    return (
        <div className="info-wrapper" id="info">
            <div className="info-inreWrapper">
            <h1>Om mig</h1>
                <div className="info-ovre">
                    <div className="info-ovreVanster">
                        <div className="infoBild" /> 
                    </div>
                    <div className="info-ovreHoger">
                       <p className="info-ovreHogerText">
                       "Jag hade i flera år drömt om att göra något kreativt och programmering
                       var något som alltid hade intresserat mig"
                       </p>
                    </div>
                    </div>
                <div className="info-nedre">
                        <div className="info-streck"></div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Duis non sapien hendrerit purus lobortis semper. 
                            Morbi cursus tellus in lobortis tincidunt. 
                            Donec sollicitudin metus id libero venenatis dignissim. 
                            Mauris molestie nibh sit amet enim porta malesuada. 
                            Curabitur vulputate pretium nibh non ultrices.    
                        </p>
                        <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Duis non sapien hendrerit purus lobortis semper. 
                            Morbi cursus tellus in lobortis tincidunt. 
                            Donec sollicitudin metus id libero venenatis dignissim. 
                            Mauris molestie nibh sit amet enim porta malesuada. 
                            Curabitur vulputate pretium nibh non ultrices. 
                            Fusce vitae accumsan purus, eget mattis augue. 
                            Curabitur vel lectus metus. Pellentesque fermentum porta dictum. 
                            Vivamus interdum leo non massa mattis, a scelerisque augue rhoncus. 
                            Fusce molestie justo libero, eget porta magna lacinia vel.
                        </p>
                        <p>
                            Curabitur vulputate pretium nibh non ultrices. 
                            Fusce vitae accumsan purus, eget mattis augue. 
                            Curabitur vel lectus metus. Pellentesque fermentum porta dictum. 
                            Vivamus interdum leo non massa mattis, a scelerisque augue rhoncus. 
                            Fusce molestie justo libero, eget porta magna lacinia vel.
                        </p>
                    
                        <div className="info-streck"></div>
                    <button className="info-knapp">Ladda ner CV</button>
                </div>
                    
                </div>
        </div>
    );
}

export default Info; 