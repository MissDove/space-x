import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom";
import fetchMock from "fetch-mock";

import { Rockets } from "../rockets";

const mockData = [
    { id: 1, active: true, rocket_name: "Majestic" },
    { id: 2, active: false, rocket_name: "Tesla" },
    { id: 3, active: true, rocket_name: "Mars Mission" },
];

const rocketsApiEndpoint = `https://api.spacexdata.com/v3/rockets`;

// can't get this test to work, replace `fetchMock` with `msw`
describe("<Rockets />", () => {
    xit("should render a list of rockets when calling spacex api endpoint for rockets", async () => {
        fetchMock.getOnce(rocketsApiEndpoint, {
            status: 200,
            body: { mockData },
        });

        const { getByText, getAllByTestId } = render(
            <StaticRouter location={"/rockets"}>
                <Rockets />
            </StaticRouter>
        );

        const majesticTitle = await getByText(/majestic/i);
        const teslaTitle = await getByText(/tesla/i);
        const marsMissionTitle = await getByText(/mars mission/i);

        expect(majesticTitle).toBeInTheDocument();
        expect(teslaTitle).toBeInTheDocument();
        expect(marsMissionTitle).toBeInTheDocument();

        const rocketStatus = getAllByTestId(/rocket-status/i);

        expect(rocketStatus[0]).toBe(/active/i);
    });
});
