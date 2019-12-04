import React, {useState} from 'react'
import {MdFavoriteBorder, MdFavorite} from "react-icons/md";

const Localmovies = (props) => {
    const [checked,
        setChecked] = useState(false)

    const addMe = () => {
        setChecked(true)
        props.addToFavorite(props.nummer)
    }
    const removeMe = () => {
        //to be done
        setChecked(false)
    }
    return (
        <div className="film">
                <div className="info">
                    <h1>{props.title} {checked
                            ? <MdFavorite className="favorite" onClick={removeMe}/>
                            : <MdFavoriteBorder className="favorite" onClick={addMe}/>
    }

                    </h1>
                    <p>Sjanger: {props.sjanger + " "}
                    </p>
                    <li>{props.releaseYear}</li>
                    <div className="favorite"></div>
                </div>
                <img src={props.img} alt={"Filmen: " + props.title}/>
        </div>

    )
}

export default Localmovies