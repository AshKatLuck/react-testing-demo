import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("shows Hello World greeting on screen", () => {
  //Arrange
  render(<Greeting />);

  //Act
  //Nothing in this case

  //Assert
  const helloWorldElement = screen.getByText("Hello World", { exact: false });
  expect(helloWorldElement).toBeInTheDocument();
});
