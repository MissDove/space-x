import { render } from "@testing-library/react";

import { Home } from "../home";

describe("<Home />", () => {
    it("should render the Navbar component", () => {
        const { getByText } = render(<Home />);

        expect(getByText(/spacex/i)).toBeVisible();
    });
});
