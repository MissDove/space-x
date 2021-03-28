import { Route, Switch } from "react-router-dom";

import { Home } from "pages/home";
import { routes } from "config/routes";

export const Routes = () => (
    <Switch>
        <Route path={routes.home.path} component={Home} exact={true} />
    </Switch>
);
