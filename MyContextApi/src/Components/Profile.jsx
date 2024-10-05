import React, { useContext } from "react";
import UserContext from "../Context/UserContext";


function Profile(){
    const {user} = useContext(UserContext);

    console.log(user);
    if (!user) return <div>please login</div>

     else return <div>Welcome {user.name}</div>
}


export default Profile