/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import HomePage from "../pages/Home";

describe.skip("Home Page", () => {
  it("must display their description", () => {
    render(
      <HomePage
        description={{
          title: "Welcome",
          subtitle: "to testing",
        }}
      />
    );

    expect(screen.queryByText(/Welcome/i)).toBeInTheDocument();

    screen.debug();
  });
});
