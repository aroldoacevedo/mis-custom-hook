import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({ x:0 , y:0 });
    const { x , y } = coords;

    useEffect(() => {

        const mouseMove = (e) => {
            let coors = { x: e.x, y : e.y};
            //console.log(coors);
            setCoords( coors );
        }

        console.log('componente montado!');
        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            console.log('componente desmontado!')
            // se deja de utilizar este componente
        }
    }, []);

    return (
        <div>
            <h3>Eres genial!</h3>
            <p>
                x:{ x } y:{ y }
            </p>
        </div>
    )
}
