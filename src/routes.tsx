import { Route, Switch } from "react-router-dom";

import { Home } from "pages/home";
import { routePaths } from "config/route-paths";

export const Routes = () => (
    <Switch>
        <Route path={routePaths.home.path} component={Home} exact={true} />
    </Switch>
);
