import { act,render, screen } from "@testing-library/react"
import Restaurantmenu from "../Restaurantmenu"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import {MOCK_DATA} from "../mocks/RestroMenuMock.json"
import "@testing-library/jest-dom"
import Appstore from "../../utils/ReduxStore/Appstore"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})
describe("Adding items to the cart and reading the cart items",()=>{
    it("Add items carts from menu ",async()=>{
        await act(async()=>{

             render(
                <BrowserRouter>
                <Provider store={Appstore}>
                 <Restaurantmenu />
               </Provider>
               </BrowserRouter>
             );
        })
       const accheader=  screen.getByText("Kebabs Platter and Starters (12)");
       expect(accheader).toBeInTheDocument();
    })
})