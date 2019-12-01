import React from 'react'

const GenreButton = (props, i) => {
    return(
    <button onClick={() => props.filterSjangre(props.genre)} className="sjanger">{props.genre}</button>
    )
}

export default GenreButton