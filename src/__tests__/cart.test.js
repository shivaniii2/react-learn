import RestaurantMenu from "../components/RestaurantMenu";
import ResMenuCatBody from "../components/ResMenuCatBody";
import Header from "../components/Header"
import { fireEvent, render,screen } from "@testing-library/react";
import MOCK_RES from "../mocks/resMenuItems.json"
import {act} from "react-dom/test-utils";
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import appStore from "../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../components/Cart";




global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : () =>{
            return Promise.resolve(MOCK_RES)
        }
    } )
})

test('should have restaurant menu component', async() => { 
   await act(async ()=>{
    render(
        <BrowserRouter>
        
        <Provider store={appStore}>
             <RestaurantMenu/>
             <ResMenuCatBody/>
             <Header/>
            <Cart/>
        </Provider>
   
        </BrowserRouter>
       
    )
   }) 
   
  let accordian = screen.getByText("What’s New");
  fireEvent.click(accordian)
  let itemList = screen.getAllByTestId("itemlist")
 
  expect(itemList.length).toBe(10);
   let addbtn = screen.getAllByText("Add +")
   fireEvent.click(addbtn[0]);
   let cartnumber = screen.getByText("Cart - (1)")
   expect(cartnumber).toBeInTheDocument();
   
   expect(screen.getAllByTestId("itemlist").length).toBe(11);
   let clearBtn = screen.getByRole("button",{name: "Clear Cart"})
   fireEvent.click(clearBtn);
   expect(screen.getAllByTestId("itemlist").length).toBe(10)
   
  
  
  
 })