import React from "react";
import Home from "../../Pages/Home";
import { render } from "@testing-library/react";

describe("Home page", () => {
  it("Should be able to search a repository", async () => {
    const { container } = render(<Home />);
    const input = container.querySelector("input");
    const button = container.querySelector("button");
    expect(!!input && !!button).toBe(true);
  });

  it("Should be able to see progress while the api is not responding ", async () => {
    const { getByTestId } = render(<Home />);
    const progress = getByTestId("progress");
    expect(!!progress).toBe(true);
  });
});
