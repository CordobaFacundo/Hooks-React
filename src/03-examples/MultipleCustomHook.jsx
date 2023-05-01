
import React from 'react'
import { useFetch, useCounter } from '../hooks/index.js'
import { IsLoading } from './IsLoading.jsx';
import { BlockQuote } from './BlockQuote.jsx';

export const MultipleCustomHook = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                (isLoading) ?
                    <IsLoading />
                    :
                    <BlockQuote name={data.name} species={data.species} status={data.status} />
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
