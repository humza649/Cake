import { useState, useEffect } from 'react'
export function Cakes( props ) {
    const [cakes,setCakes] = useState()

    useEffect(() => {
        if( cakes === undefined ) {
            getData( props.url )
        }
    })

    const getData = (dest) => {
        fetch( dest )
        .then( (res) => res.json() )
        .then( (data) => { 
            setCakes(data) 
            console.log(data)
        })
        .catch((err) => console.log(err))
    }
    
    return(
        <div className="cakes">
            <h2>Cakes</h2>
        </div>
    )
}

export default Cakes