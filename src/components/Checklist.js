import React, {useState} from 'react'
import ChecklistSubmodule from './ChecklistSubmodule'

const Checklist = () => {
    const Array = ["Feed cat", "Eat, drink", "sleep", "Stay optimistic", "Dont buy shitt!"]
    const [todos, setTodos] = useState(Array)
    const remove = (i) => {
        setTodos(
            todos.filter( todo => todo !== todos[i])
        )
    }
    const addItem = (e) => {
        if(e.keyCode === 13) {
            setTodos([...todos, e.target.value])
            e.target.value = ''
        }
    }
   
    return(
        <div className='submodule'>
            <div>
                <h2>Checklist</h2>
                <input type="text" onKeyDown={addItem} placeholder="Add item to checklist"  />
                {
                    todos.map(
                        (todo, i) => <ChecklistSubmodule remove={remove} myNumber={i} todo={todo}/>
                    )
                }
            </div>
        </div>
    )
}

export default Checklist