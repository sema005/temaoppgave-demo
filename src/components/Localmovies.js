import React from 'react'

const Localmovies = (props) => {

    return (
        <div className="film">
            <div className="info">
                <h1>{props.title}</h1>
                <p>Sjanger: {props.sjanger   + " " }
                </p>
                <li>{props.releaseYear}</li>
            </div>
            <img src={props.img} alt={"Filmen: " + props.title}/>
        </div>

    )
}

export default Localmovies