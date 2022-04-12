import {render, screen} from "@testing-library/react";
import axios from "axios";
import userEvent from "@testing-library/user-event";

import Search from "../Code Assignment Testing/Search";

jest.mock("axios");

test("fetch stories from API and display it", async () => {
  const stories = [
    {objectID: 1, title: "Test-1"},
    {objectID: 2, title: "Test-2"},
  ];
  axios.get.mockImplementationOnce(() => Promise.resolve({data: {hits: stories}}));

  render(<Search />);
  userEvent.click(screen.getByRole("button"));

  const items = await screen.findAllByRole("listitem");
  expect(items).toHaveLength(2);
});

test("fail to fetch API", async () => {
  axios.get.mockImplementationOnce(() => Promise.reject(new Error()));
  render(<Search />);
  userEvent.click(screen.getByRole("button"));
  const message = await screen.findByText(/ada yang error .../i);
  expect(message).toBeInTheDocument();
});
