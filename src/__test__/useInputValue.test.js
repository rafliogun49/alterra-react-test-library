import {act, renderHook} from "@testing-library/react-hooks";
import {useInputValue as inputValue} from "../Code Assignment Testing/useInputValue";

describe("useInputValue", () => {
  it("return current initial value, onchange", () => {
    const {result} = renderHook(() => inputValue("Test string"));

    expect(result.current.value).toEqual("Test string");
  });
});
