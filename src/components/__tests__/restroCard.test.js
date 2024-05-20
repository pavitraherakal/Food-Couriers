import { screen,render } from "@testing-library/react";
import RestrorantContainer from "../RestrorantContainer";
import MOCK_DATA from "../mocks/restroCardMock.json";
import "@testing-library/jest-dom";

it("Restrocard Render component with data",()=>{
    render(<RestrorantContainer resdata={MOCK_DATA}></RestrorantContainer>  );
   const name=screen.getByText("Candice's Gourmet Sandwiches & Wraps");
  expect(name).toBeInTheDocument();

})