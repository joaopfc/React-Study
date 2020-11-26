import React, { useState } from 'react';

// eslint-disable-next-line
export default props => {

    const [numeros,setNumeros] = useState(Array(props.quantNumero).fill(0))

    function gerarNumerosNaoContidos(array){
        const max = 60
        const min = 1
        const novoNumero = parseInt(Math.random() * (max - min)) + min;

        return array.includes(novoNumero) ? gerarNumerosNaoContidos(array) : novoNumero
    }

    function gerarNumeros(){
        const novoArray = Array(props.quantNumero)
        .fill(0)
        .reduce(a => {
            const novoNumero = gerarNumerosNaoContidos(a)
           return [...a, novoNumero]
        }, [])
        .sort((a, b)=> a - b)
        setNumeros(novoArray)
    }

    return(
        <>
            <h3>Mega-Sena</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar Números</button>
        </>
    );
};