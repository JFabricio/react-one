import React from "react"


export default props =>

    <>
        <div>
            <h2>O numero {props.numero} é :</h2>
            {props.numero % 2 === 0 ?
                <h2>É Par</h2>
            :        
                <h2>É Impar</h2>
            }    
        </div>

    </>
