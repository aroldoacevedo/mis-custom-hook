import { useState, useEffect } from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {
    //cada cambio realizado sobre el mismo (setFormState) se gatilla useEffect
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name , email } = formState;

    useEffect(() => {
        console.log('hey!');
    }, []);//colocar un arreglo vacio para que se dispara una sola vez

    useEffect(() => {
        console.log('formState cambio!');
    }, [formState]);//Cualquier cambio que suceda en el formState se dispara el consola.log

    useEffect(() => {
        console.log('email cambio!');
    }, [email]);//Cualquier cambio que suceda en el email se dispara el consola.log


    const handleInputChange = ({target}) => {
        setFormState(
            {
                ...formState,
                [ target.name ] : target.value
            });
            //target.name : propiedad del componente input
            //target.value: valor de esa propiedad
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>
            <div className="form-group">
                <input type="text" 
                        name="name" 
                        className="form-control"
                        placeholder="Tu nombre" 
                        autoComplete="off"
                        value={ name }
                        onChange={ handleInputChange }/>
            </div>
  
            <div className="form-group py-3">
                <input type="text" 
                        name="email" 
                        className="form-control"
                        placeholder="email@gmail.com" 
                        autoComplete="off"
                        value={ email }
                        onChange={ handleInputChange }/>
            </div>

            { (name === '123') && <Message />}
        </>
    )
}
