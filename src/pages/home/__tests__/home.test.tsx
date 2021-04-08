import { render, fireEvent } from "@testing-library/react";
import { StaticRouter, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import { Home } from "../home";

describe("<Home />", () => {
    it("should render the Navbar component", () => {
        const { getByText } = render(
            <StaticRouter location={"/"}>
                <Home />
            </StaticRouter>
        );

        expect(getByText(/spacex/i, { selector: "h1" })).toBeVisible();
    });

    it("should render links to `rockets` and `dragons` tabs", () => {
        const { getByTestId, getByText } = render(
            <StaticRouter location={"/"}>
                <Home />
            </StaticRouter>
        );

        expect(getByTestId(/rockets-link/i)).toBeInTheDocument();
        expect(getByText(/rockets/i)).toBeVisible();

        expect(getByTestId(/dragons-link/i)).toBeInTheDocument();
        expect(getByText(/dragons/i)).toBeVisible();
    });

    it("should render `welcome` message", () => {
        const { getByText } = render(
            <StaticRouter location={"/"}>
                <Home />
            </StaticRouter>
        );

        expect(getByText(/welcome to spacex/i, { selector: "h2" })).toBeVisible();
    });

    it("should take user to `rockets` tab after clicking on `rockets` link", () => {
        const history = createBrowserHistory();
        history.push("/");

        const { getByText } = render(
            <Router history={history}>
                <Home />
            </Router>
        );

        const rocketsLink = getByText(/rockets/i);
        fireEvent.click(rocketsLink);

        expect(history.location.pathname).toBe("/rockets");
    });

    it("should take user to `dragons` tab after clicking on `dragons` link", () => {
        const history = createBrowserHistory();
        history.push("/");

        const { getByText } = render(
            <Router history={history}>
                <Home />
            </Router>
        );

        const dragonsLink = getByText(/dragons/i);
        fireEvent.click(dragonsLink);

        expect(history.location.pathname).toBe("/dragons");
    });
});
