import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";

import { NavbarRouter } from "components/navbar";

export const Spacecrafts = () => {
    const { url, path } = useRouteMatch();

    return (
        <div>
            <NavbarRouter />
            <div>
                <NavLink to={url} exact={true}>
                    Rockets
                </NavLink>
                <div>Some space here</div>
                <NavLink to={`${url}/dragons`} exact={true}>
                    Dragons
                </NavLink>
            </div>
            <div>
                <Switch>
                    <Route exact={true} path={path}>
                        <div>Rockets</div>
                    </Route>
                    <Route exact={true} path={`${path}/dragons`}>
                        <div>Dragons</div>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};
