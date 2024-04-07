
import { createContext } from "react";

const userContext = createContext({
    loggedInUser : "Default"
})


export default userContext;

// to learn about context please refer to context.txt