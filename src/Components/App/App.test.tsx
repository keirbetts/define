import App from "./App";
import { render } from "@testing-library/react";

describe("<App />", () => {
  it("renders successfully", async () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
