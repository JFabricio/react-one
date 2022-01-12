import React from "react";

import './Card.css'

export default props =>
    <div className="Card">

        <div className="Content">
            {props.children}
        </div>
        
        <div className="Footer" style={{
            backgroundColor: props.color || '#000000',
            borderColor: props.colorBFooter
            }}>
            {props.titulo}
        </div>


    </div>