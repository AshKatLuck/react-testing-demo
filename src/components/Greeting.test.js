import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greetings Component", () => {
  test("renders Hello World greeting on screen", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //Nothing in this case

    //Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'nice to meet you' when button is not pressed", () => {
    //Arrange
    render(<Greeting />);

    //Act

    //Assert
    const outputElement = screen.getByText("nice to meet you", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });
  test("renders 'Changed!' when button is clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });
  test("not rendering 'nice to meet you' when button is clicked", () => {
    //Arrange
    render(<Greeting />);
    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    const outputElement = screen.queryByText("nice to meet you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
