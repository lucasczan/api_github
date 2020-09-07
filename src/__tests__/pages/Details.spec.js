import React, { Children } from "react";
import Details from "../../Pages/Details";
import { render } from "@testing-library/react";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn().mockReturnValue({ full_name: "vanpelt/jsawesome" }),
  Link: ({ children }) => <a>{children}</a>,
}));

describe("Details page", () => {
  it("Should be able to see stars of repository", async () => {
    const { getByTestId } = render(<Details />);
    const stars = getByTestId("stars-count");
    expect(!!stars).toBe(true);
  });

  it("Should be able to see forks of repository", async () => {
    const { getByTestId } = render(<Details />);
    const forks = getByTestId("forks-count");
    expect(!!forks).toBe(true);
  });

  it("Should be able to see issues of repository", async () => {
    const { getByTestId } = render(<Details />);
    const issues = getByTestId("issues-count");
    expect(!!issues).toBe(true);
  });

  it("Should be able to return to home ", async () => {
    const { container } = render(<Details />);
    const link = container.querySelector("a");
    expect(!!link).toBe(true);
  });
});
