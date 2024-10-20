import React, { useState } from "react";
import { myToDos } from "../Context/ToDoContext";

function ToDoForm(){

    const[data, setData] = useState("")
    const {addToDo} = myToDos()

    const add = (e)=>{
        e.preventDefault();

        if(!data) return

        addToDo({ toDoStatus:false, toDoText:data})
        
        console.log("Hii Form" ,data )
        setData("")
    }


    return(
        <>
        <form onSubmit={add}>
            <div className="relative w-full">
                    <input
                        placeholder="Enter text..."
                        className="w-full p-4 font-medium rounded-full border-2 border-solid  border-sky-500 bg-gray-100 outline-none"
                        value={data}
                        onChange={(e)=>setData(e.target.value)}
                        type="text"
                    />
                    <button type="submit" className="p-4 border-none rounded-full w-36 absolute bottom-0 top-0 right-0 text-white text-lg font-bold hover:scale-105 bg-orange-500">
                        Add 
                    </button>
            </div>
        </form>
        </>
    )
} 

export default ToDoForm