    import React, {useState} from "react";
    import { useMyToDos } from "../Context/ToDoContext";
    import propTypes from "prop-types";

    function ToDoList({toDo}){
        const {updateToDo, deleteToDo, statusCheck} = useMyToDos()
        const [editMsg, setEditMsg] = React.useState(toDo.toDoText)
        const [isToDoEditable, setIsToDoEditable] = useState(false)
        const [isToggleDisable, setIsToggleDisable] = useState(false)

        const Edit = ()=>{
            updateToDo(toDo.id, {...toDo, toDoText:editMsg});
            setIsToDoEditable(false)
            setIsToggleDisable(false)
        }

        const myDeleteToDO = ()=>{
            deleteToDo(toDo.id)
        }
        const toggleStatus = () => {
            statusCheck(toDo.id)
            
        }
        return(
            <div className="flex gap-10 bg-sky-300 w-full p-4 font-medium rounded-full border-none border-gray-100 bg-gray-100">
                <input
                    type="checkbox"
                    checked={toDo.toDoStatus}
                    className="cursor-pointer"
                    onChange={toggleStatus}
                    disabled = {isToggleDisable}
                />
                <input
                    type = "text"
                    className = {`w-full h-10 ${ isToDoEditable ?"bg-sky-50 text-black font-medium":"bg-sky-300"} 
                                    ${toDo.toDoStatus?"line-through":""}
                                    border-none outline-none rounded-full p-4 text-white font-bold text-2xl`}
                    value={editMsg}
                    
                    onChange={(e)=> setEditMsg(e.target.value)}
                    placeholder="Enter text to be get Updated.."
                    readOnly = {!isToDoEditable}
                />
                <button 
                    className="cursor-pointer hover:scale-125" 
                    onClick = {
                        ()=>{
                            if (toDo.statusCheck) return;
                            setIsToggleDisable(true)
                            if(isToDoEditable){
                                Edit()
                            }else{
                                setIsToDoEditable((prev)=>!prev)
                            }
                            
                        }
                    }
                    disabled = {toDo.toDoStatus}
                >
                    {isToDoEditable ? '💾' : '✏️'}
                </button>

                <button 
                    className="cursor-pointer hover:scale-125"
                    onClick={myDeleteToDO}
                >
                    ❌
                </button>
            </div>
        )
    }

    ToDoList.propTypes = {
        toDo : propTypes.shape(
            {
                id : propTypes.number.isRequired,
                toDoText : propTypes.string.isRequired,
                toDoStatus : propTypes.string.isRequired,
                addToDo : propTypes.func.isRequired,
                deleteToDo : propTypes.func.isRequired,
                updateToDo : propTypes.func.isRequired,
                statusCheck : propTypes.func.isRequired
            }
        ).isRequired,

    };

    export default ToDoList