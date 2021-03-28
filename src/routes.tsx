import { Route, Switch } from "react-router-dom";

import { Home } from "pages/home";
import { Spacecrafts } from "pages/spacecrafts";
import { routePaths } from "config/route-paths";

export const Routes = () => (
    <Switch>
        <Route path={routePaths.home.path} component={Home} exact={true} />
        <Route path={routePaths.spacecrafts.path} component={Spacecrafts} exact={true} />
    </Switch>
);
