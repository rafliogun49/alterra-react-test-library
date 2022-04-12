import {fireEvent, getByTestId, render, screen} from "@testing-library/react";
import FormCoding from "../Code Assignment Testing/FormCoding";

describe("Header", () => {
  it("should render same text passed into little prop", () => {
    render(<FormCoding />);
    const h1Element = screen.getByRole("heading");
    expect(h1Element).toBeInTheDocument();
  });
});

describe("Form", () => {
  it("should be able to type into input nama", () => {
    render(<FormCoding />);
    const inputElements = screen.getByTestId("nama");
    fireEvent.change(inputElements, {target: {value: "nama"}});
    expect(inputElements.value).toBe("nama");
  });
  it("should be able to type into input email", () => {
    render(<FormCoding />);
    const inputElements = screen.getByTestId("email");
    fireEvent.change(inputElements, {target: {value: "email"}});
    expect(inputElements.value).toBe("email");
  });
  it("should be able to type into input noHandphone", () => {
    render(<FormCoding />);
    const inputElements = screen.getByTestId("noHandphone");
    fireEvent.change(inputElements, {target: {value: "0895123456"}});
    expect(inputElements.value).toBe("0895123456");
  });
  it("should be able to check into input pendidikanIT", () => {
    render(<FormCoding />);
    const checkboxElements = screen.getByTestId("pendidikanIT");
    expect(checkboxElements.checked).toEqual(false);
    fireEvent.click(checkboxElements);
    expect(checkboxElements.checked).toEqual(true);
  });
  it("should be able to check into input pendidikanNonIT", () => {
    render(<FormCoding />);
    const checkboxElements = screen.getByTestId("pendidikanNonIT");
    expect(checkboxElements.checked).toEqual(false);
    fireEvent.click(checkboxElements);
    expect(checkboxElements.checked).toEqual(true);
  });
  it("should be able to choose class option", () => {
    render(<FormCoding />);
    const selectElements = screen.getAllByRole("option");
    const selectGolangClass = screen.getByTestId("golang");
    const selectReactClass = screen.getByTestId("reactjs");
    const selectFullStackClass = screen.getByTestId("fullstack");
    expect(selectElements.length).toBe(4);
    fireEvent.select(selectGolangClass);
    fireEvent.select(selectReactClass);
    fireEvent.select(selectFullStackClass);

    expect(selectGolangClass.value).toBe("golang");
    expect(selectReactClass.value).toBe("reactjs");
    expect(selectFullStackClass.value).toBe("fullstack");
  });
  it("should be able to type into input text harapan", () => {
    render(<FormCoding />);
    const inputElements = screen.getByTestId("text-harapan");
    fireEvent.change(inputElements, {target: {value: "text-harapan"}});
    expect(inputElements.value).toBe("text-harapan");
  });
});

// describe("Submit Form", () => {
//   it("should submit", () => {
//     const mockedSubmit = jest.fn();
//     render(<FormCoding onSubmit={mockedSubmit} />);
//     fireEvent.submit(screen.getByTestId("data-submit"));
//     expect(mockedSubmit).toBeCalled();
//   });
// });
