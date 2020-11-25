import React from 'react';

// eslint-disable-next-line
export default props => {

    function acao(){
        props.onClicar(Math.random(), 'Gerado')
    }

    return(
        <div>
            <button onClick={acao}>Alterar</button>
        </div>
    )
}