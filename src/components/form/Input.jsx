import React, { useState } from 'react';

// eslint-disable-next-line
export default props => {

    const [nome,setNome] = useState("João Paulo")

    return(
        <>
            <h3>{nome}</h3>
            <input 
            type="text" 
            value={nome} 
            onChange={event => setNome(event.target.value)}/>
        </>
    );
};