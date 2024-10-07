import { render } from "@testing-library/react";
import { Word } from "./Word";



describe("<Word />", () => {

  it("renders successfully", async () => {
    const { container } = render(<Word />);

    expect(container.firstChild).toMatchSnapshot();
  });
});