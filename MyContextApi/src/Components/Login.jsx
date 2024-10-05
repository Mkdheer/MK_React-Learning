import React from "react";
import { useContext } from "react";
import UserContext from "../Context/UserContext";


function Login(){

    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");

    console.log(UserContext);

    const {setUser} = useContext(UserContext);

    const change = (e)=>{
        e.preventDefault();
        setUser({name,password});
    }
    return(
        <>      
        <input 
        type="text" 
        placeholder="Enter UserName.."
        value={name}
        onChange={(e) => {setName(e.target.value)}}
        />
        {" "}
        <input 
        type="password" 
        placeholder="Enter Password.."
        value={password}
        onChange={(e) => {setPassword(e.target.value)}} 
        /> <br />
        <button type="submit" onClick={change} >Submit</button>
        </>
    )
}

export default Login;