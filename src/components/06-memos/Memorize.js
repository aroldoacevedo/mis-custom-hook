import React, { useState } from 'react'
import { useCouter } from '../../hooks/useCouter'
import '../02-useEffect/effects.css'
import { Small } from './Small';

export const Memorize = () => {

    const { counter, increment} = useCouter( 10 );
    const [show, setShow] = useState(true)

    return (
        <div>
            <h1>Counter <small><Small value = { counter } /></small></h1>
            <hr/>
            <button 
            className="btn btn-primary"
            onClick={ () => increment(1)}>
                + 1
            </button>
            <button
            className="btn btn-outline-primary mx-3"
            onClick={ () => setShow ( !show )}>
                Show/Hide { JSON.stringify( show)}
            </button>
        </div>
    )
}
