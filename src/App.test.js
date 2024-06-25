//Install
import { render, screen } from "@testing-library/react";
//Install
import App from "./App";

//Element
test( "renders learn react link", () => {
  //Element
  render( <App /> );
  //Element
  const linkElement = screen.getByText(/learn react/i);
  //Element
  expect(linkElement).toBeInTheDocument();
});