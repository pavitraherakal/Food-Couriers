import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const User=()=>{
const [userInfo,setUseInfo]=useState([]);
   
useEffect(()=>{
    fetchuserinfo();
    },[]);

const fetchuserinfo=async ()=>
{
const data=await fetch("https://api.github.com/users/pavitraherakal");
const json=await data.json();
setUseInfo(json);
}

const {login,avatar_url,html_url}=userInfo;
    return(
        <div>
            <h2>Name:{login} </h2>
        <h2>  Photo: </h2> <img src={avatar_url}></img>
          <h3>Git Hub Url:</h3><Link to={html_url}>{html_url}</Link>
        </div>
    )
}

export default User;