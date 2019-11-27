import React, {useState} from 'react'
import { FaTrash } from "react-icons/fa";

import './ChecklistSubmodule.css'

const ChecklistSubmodule = (props) => {
    const [checked, setChecked] = useState(false)
    const checkMe = () => {
        setChecked(!checked)
    }
    return(
        <div className='submodule checklist-item'>
           <li className={ checked ? 'checked' : '' } >{props.todo} </li>
            <FaTrash className="remove" onClick={() => props.remove(props.myNumber)}/>
            <input type="checkbox" onClick={checkMe} />
        </div>
    )
}

export default ChecklistSubmodule