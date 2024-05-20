
const About=()=>{
  return  (<div>
     
            <div className="p-2 m-2 ">
            <label className=" text-md p-2  " >UserName :</label>
            <input  className="border border-gray-500 " type="textbox"></input>
            </div>
             <div className=" p-2 m-2">
            <label className="  text-md p-2" >Password :</label>
            <input  className="border border-gray-500 " type="textbox"></input>
            </div>
            
      <button className=" mx-20  px-1 border border-black rounded font-bold"> Submit</button>

       
    </div>)
}
export default About;