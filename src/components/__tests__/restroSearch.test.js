import { act, fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/restraurantsMock.json"
import RestrorantContainer from "../RestrorantContainer"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
global.fetch= jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})
it("Search the restro on filter the text burger",async()=>{
    await act(async()=>{
        
        render(<BrowserRouter>
        <Body/>
        </BrowserRouter>);
        
    })
    const searchbutton=screen.getByRole("button",{name:"Search"});
    expect(searchbutton).toBeInTheDocument();
    const inputbox=screen.getByTestId("searchinput");
    fireEvent.change(inputbox,{target:{value:"Burger"}});
    fireEvent.click(searchbutton);
   const restrocards= screen.getAllByTestId("restcard");
   expect(restrocards.length).toBe(2);
    
});
it("Top rated Restraurants filter",async()=>{
    await act(async()=>{
        render(<BrowserRouter>
            <Body/>
            </BrowserRouter>);
    })
    const restrocardsbeforefilter= screen.getAllByTestId("restcard");
    const filterbutton=screen.getByRole("button",{name:"Top Rated Restaurants"});
expect(restrocardsbeforefilter.length).toBe(20);
fireEvent.click(filterbutton);
const restrocardsafterfilter= screen.getAllByTestId("restcard");
expect(restrocardsafterfilter.length).toBe(18);

})
/*it("promoted Restaurants",async()=>{
    await act(async()=>{
        render(<BrowserRouter>
            <Body/>
            </BrowserRouter>);
    })
     const promotedcards=screen.getAllByTestId("promtedcards")
     expect(promotedcards.length).toBe(5);
})*/
