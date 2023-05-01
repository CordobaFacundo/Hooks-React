
import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        const onMouseMove = ({x, y}) => {
            const coord = {x, y};
            console.log(coord);
        }

        window.addEventListener('mousemove', onMouseMove );

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, [])

    return (
        <>
            <h3>Usuario ya existe</h3>
        </>
    )
}
