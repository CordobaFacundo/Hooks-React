
import React from 'react'

export const ShowIncrement = React.memo( ({increment}) => {
    console.log('Me volvi a generar :c');
    
    return (
        <>
            <button onClick={ () => { increment(5) } } className='btn btn-primary mt-2'>Incrementar</button>

        </>
    )
})
