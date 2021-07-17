import React from 'react';
import preloader from '../../images/Preloader.gif'


function Preloader() {

    return (
        <div style={{backgroundColor: 'white'}}>
            <img src={preloader}/>
        </div>
    )
}

export default Preloader;

