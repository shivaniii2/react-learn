import userContext from "../utils/userContext";
import { useContext } from "react";
const Contact = () => {
  const { loggedInUser } = useContext(userContext);

  return (
    <>
      <div className="font-extrabold py-3 pl-3 text-3xl">Contact Us Page :</div>
      <div className="font-medium text-lg p-3">
        <div>Contact number: 7807609148</div>
        <div>Gmail : shivani78076@gmail.com</div>
        <div> User : {loggedInUser} </div>
        <div className="mt-2 flex">
        <input className="border border-black p-3 " placeholder="Type your query here"></input>
        <input className="border border-black p-3 ml-2" placeholder="Type your Name"></input>
        <button className="ml-8 border border-black p-2 rounded-lg bg-slate-400">Submit</button>
        </div>
        
      </div>
    </>
  );
};
export default Contact;
