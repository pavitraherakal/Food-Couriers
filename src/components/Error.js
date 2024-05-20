import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    
    return (
        <div> Oops something went wrong
         <h1>{err.data}</h1>
        </div>

    )

}
export default Error;