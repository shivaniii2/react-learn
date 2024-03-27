
import { createContext } from "react/cjs/react.development";
const userContext = createContext({
    loggedInUser : "Default"
})


export default userContext;

// to learn about context please refer to context.txt