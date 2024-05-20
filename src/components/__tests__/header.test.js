import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render,screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Appstore from "../../utils/ReduxStore/Appstore";
import "@testing-library/jest-dom"
it("Grocery text in header",()=>{
        render( <BrowserRouter>
        <Provider store={Appstore}>
        <Header/>
        </Provider>
        </BrowserRouter>);
   
   const grocerytext=screen.getByText("Grocery");
    expect(grocerytext).toBeInTheDocument();
});
it("login button in header",()=>{
    render( <BrowserRouter>
    <Provider store={Appstore}>
    <Header/>
    </Provider>
    </BrowserRouter>);

const loginbutton=screen.getByRole("button");
expect(loginbutton).toBeInTheDocument();
});
it("should cart items 0",()=>{
    render( <BrowserRouter>
    <Provider store={Appstore}>
    <Header/>
    </Provider>
    </BrowserRouter>);

const carttext=screen.getByText("🛒(0-items)");
expect(carttext).toBeInTheDocument();
});

it("login button onclick logout",()=>{
    render( <BrowserRouter>
    <Provider store={Appstore}>
    <Header/>
    </Provider>
    </BrowserRouter>);

const loginbutton=screen.getByRole("button",{name:"Login"});
fireEvent.click(loginbutton);
const logoutbutton=screen.getByRole("button",{name:"Logout"});
expect(logoutbutton).toBeInTheDocument();
});