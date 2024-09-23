import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
// const [data, setData] = useState([]);

// useEffect(
//     () =>{
//         fetch('https://api.github.com/users/Mkdheer')
//         .then(Response => Response.json())
//         .then(Response => {
//             console.log(Response),
//             setData(Response)})
//     },[]
// )


const data = useLoaderData(); 
    return (
        <>
        <div> My GitHub : {data.followers} </div>
        <img src = {data.avatar_url} alt="Image" width={100} height={100} />
        </>
    )
}

export default Github;

export const myApiInfo = async ()=>{
    const response = await fetch('https://api.github.com/users/Mkdheer');
    console.log("Hii");
    return response.json();
}