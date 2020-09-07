import React from "react";
import NotFound from "../../Pages/NotFound";
import { render } from "@testing-library/react";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn().mockReturnValue({ full_name: "vanpelt/jsawesome" }),
  Link: ({ children }) => <a>{children}</a>,
}));

describe("NotFound page", () => {
  it("Should be able to return to Home", async () => {
    const { container, debug } = render(<NotFound />);
    const link = container.querySelector("a");
    expect(!!link).toBe(true);
  });
});
