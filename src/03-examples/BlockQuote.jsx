
import React, { useLayoutEffect, useRef, useState } from 'react'

export const BlockQuote = ({ name, species, status, image }) => {

    const pRef = useRef()
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

    useLayoutEffect(() => {
        const {width, height} = pRef.current.getBoundingClientRect()
        setBoxSize({width ,height})
    }, [image])

    return (
        <>
            <blockquote className='blockquote text-end' style={{ display: 'flex' }}>
                <p ref={pRef} className='mb-1'>{name}</p>
                <footer className='blockquote-footer'>{species}</footer>
                <footer className='blockquote-footer'>{status}</footer>
                <footer className='blockquote-footer'>{image}</footer>
            </blockquote>

            <code>{ JSON.stringify(boxSize) }</code>
        </>
    )
}
