const { render,screen, fireEvent } = require("@testing-library/react");
import "@testing-library/jest-dom"
const { default: Header } = require("../components/Header")
const { Provider } = require("react-redux");
import { BrowserRouter } from "react-router-dom";
import appStore from "../utils/appStore";

test('should load header component with login button on it', () => { 
    render(
        <BrowserRouter>
         <Provider store={appStore}>
           
            <Header/>
          
        
         </Provider>
        </BrowserRouter>
       
    )
   // const loginBtn = screen.getByRole("button");
   // const loginBtn = screen.getByText("Login");
   // There is also another way if you have like multiple number of buttons but you want to check for one out of all of them 
    const loginBtn = screen.getByRole("button",{name:"Login"})
    expect(loginBtn).toBeInTheDocument()
    
  
   
 })
 
 test('should have a login and a logout button ', () => { 
    render(
        <BrowserRouter>
         <Provider  store={appStore}>
         <Header/>
        </Provider>
        </BrowserRouter> 
    )
     let login = screen.getByRole("button",{name:"Login"})
     fireEvent.click(login)
     let logout = screen.getByRole("button",{name:"Logout"})
     expect(logout).toBeInTheDocument()
     
    
  })