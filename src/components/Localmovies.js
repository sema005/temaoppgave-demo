import React from 'react'

const Localmovies = (props) => {

    return(
        <div className="filmer">
            <img src={props.img} alt={"bilde av: " + props.titel + " filmen"} />
            <h1>{props.titel}</h1>
            <li>{props.releaseYear}</li>
        </div>


    )
}

export default Localmovies