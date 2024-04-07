import { fireEvent, render,screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Body from "../components/Body";
import {act} from "react-dom/test-utils"
import MOCK_DATA from "../mocks/resList.json"
import { BrowserRouter } from "react-router-dom";


global.fetch = jest.fn(()=>{
    return Promise.resolve(
        {
            json: () => {
                return Promise.resolve(MOCK_DATA)
            }
        }
    )
})

// If you will see the above mocked function is nothing different from fetch function.

test('should render the body component', async() => { 
    await act(async() =>{
        render( 
        <BrowserRouter>
         <Body/>
        </BrowserRouter>
       
        )});
        
        
        // query
        
        let searchbtn = screen.getByRole("button",{name:"Search"})
        
        // Assertion
        expect(searchbtn).toBeInTheDocument()
    
 })
 
 
//  test('should have an input box and click on search button filters restaurant  ', async() => { 
//      await act(async ()=>{
//         render(
//             <BrowserRouter>
//             <Body/>
//             </BrowserRouter>
//         )
//      })

     
//      // check if there is an input box with test id "inputbox"
//      let inputbox = screen.getByTestId("inputbox");
//      // let us make a change event to the input box through fireevent . refer to test.txt for more details
     
//      fireEvent.change(inputbox,{target:{value:"Burger"}})
//      //after cahnging the input box value to burger let us click on the search button
     
//      let searchbtn = screen.getByRole("button",{name:"Search"})
//      fireEvent.click(searchbtn);
//      let resCards = screen.getAllByTestId("rescard");
//      expect(resCards.length).toBe()
     
     
     
//   })
  
  
  test('should have filter button ', async() => { 
    await act(async ()=>{
       render(
           <BrowserRouter>
           <Body/>
           </BrowserRouter>
       )
    })

    
let rescards = screen.getAllByTestId("rescard");
expect(rescards.length).toBe(9)
let filetrbtn = screen.getByRole("button",{name:"Top Rated Restaurants"})
fireEvent.click(filetrbtn)
let filteredcards = screen.getAllByTestId("rescard");
expect(filteredcards.length).toBe(9)
    
    
    
 })