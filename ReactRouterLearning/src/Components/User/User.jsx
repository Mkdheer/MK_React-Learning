import React from "react";
import { useParams } from "react-router-dom";


function User (){
    const {ID} = useParams();
    return (
        <div className="text-center" > The User number :{ID} </div>
    )
}

export default User;