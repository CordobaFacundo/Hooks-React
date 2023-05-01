
import React, {memo} from 'react'

export const Small = memo(({value}) => {
    console.log('Generado again pa');
  
    return (
    <>
        <small>{value}</small>
    
    </>
  )
})
