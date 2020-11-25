import React from 'react';

// eslint-disable-next-line
export default props => {
  
  return(
    <div>
        <label htmlFor="passoInput">Passo:</label>
            <input 
                id="passoInput" 
                type="number" 
                value={props.passo}
                onChange={event => props.onPassoChange(+event.target.value)}
            />
    </div>
  );
}
  

