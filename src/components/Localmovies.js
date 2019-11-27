import React from 'react'

const Localmovies = (props) => {

    return(
        <div className="filmer">
            <h1>{props.title}</h1>
            <li>{props.releaseYear}</li>
            <img src={props.img} alt={"Filmen: " + props.title} />
        </div>


    )
}

export default Localmovies