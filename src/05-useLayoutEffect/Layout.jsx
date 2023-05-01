
import React from 'react'
import { useFetch, useCounter } from '../hooks/index.js'
import { IsLoading } from '../03-examples/IsLoading.jsx';
import { BlockQuote } from '../03-examples/BlockQuote.jsx';

export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);
    
    return (
        <>
            <h1>Layout</h1>
            <hr />

            {
                (isLoading) ?
                    <IsLoading />
                    :
                    <BlockQuote name={data.name} species={data.species} status={data.status} image={data.image} />
            }

            <button
                onClick={() => increment()}
                className='btn btn-primary'
                disabled={isLoading}>
                Next character
            </button>
        </>
    )
}