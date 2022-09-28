import { render, screen } from "@testing-library/react";
import HomePage from "../pages/Home";

describe("HomePage", () => {
  it("must display the home page description", () => {
    const description = {
      title: "Welcome!",
      subtitle: "This is your test",
    };

    const { container } = render(<HomePage description={description} />);

    expect(container).toHaveTextContent(description.subtitle);
  });
});
