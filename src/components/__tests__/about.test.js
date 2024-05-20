import { render, screen, } from "@testing-library/react"
import About from "../About"
 import  "@testing-library/jest-dom";
describe("About us test cases",()=>{
it("render the about us component",()=>{
     render(<About />);
     const button= screen.getByRole("button");
     expect(button).toBeInTheDocument();

})
it("Check whether input tesxt box is there in compoanent",()=>{
     render(<About/>);
    const input= screen.getByText("UserName :");
    expect(input).toBeInTheDocument();
})
});