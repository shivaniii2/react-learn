import userContext from "../utils/userContext";
import { useContext } from "react/cjs/react.development";
const Contact = () => {
  const { loggedInUser } = useContext(userContext);

  return (
    <>
      <div className="font-extrabold py-3 pl-3 text-3xl">Contact Us Page :</div>
      <div className="font-medium text-lg p-3">
        <div>Contact number: 7807609148</div>
        <div>Gmail : shivani78076@gmail.com</div>
        <div> User : {loggedInUser} </div>
      </div>
    </>
  );
};
export default Contact;
