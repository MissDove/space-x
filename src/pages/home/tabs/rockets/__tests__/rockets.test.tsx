import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom";

import { Rockets } from "../rockets";

describe("<Rockets />", () => {
    it("should render `return to spacex` link", () => {
        const {} = render(
            <StaticRouter location={`/rockets`}>
                <Rockets />
            </StaticRouter>
        );
    });
});
