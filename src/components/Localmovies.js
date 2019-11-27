import React from 'react'

const Localmovies = (props) => {

    return(
        <div className="filmer">
            <img src={props.img} alt={"Filmen: " + props.title} />
            <h1>{props.title}</h1>
            <li>{props.releaseYear}</li>
        </div>


    )
}

export default Localmovies