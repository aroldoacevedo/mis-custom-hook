import React from 'react';
import { useCouter } from '../../../hooks/useCouter';
import { useFetch } from '../../../hooks/useFetch';
import '../../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

    const { counter , increment} = useCouter(1);

    const { loading,data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter  }`);

    const {author, quote } = !!data && data[0];

    console.log(counter);

    return (
        <div>
            <h1>BrakingBad Quotes</h1>
            <hr/>
            {
                loading
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote class="blockquote text-right">
                            <p className="mb-2"> {author}</p>
                            <footer className="blockquote-footer">{quote}</footer>
                        </blockquote> 
                    )
            }

            <button className="btn btn-primary"
            onClick={ () =>  increment(1) }>Siguiente quote</button>
            
        </div>
    )
}
