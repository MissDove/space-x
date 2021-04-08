import { Route, Switch, useRouteMatch } from "react-router-dom";

import { DragonsList } from "./dragons-list";
import { Dragon } from "./dragon";

export interface IDragonsProps {
    className?: string;
}

export const Dragons: React.FC<IDragonsProps> = ({ className }) => {
    const { path } = useRouteMatch();

    return (
        <div className={className}>
            <Switch>
                <Route exact path={path}>
                    <DragonsList />
                </Route>
                <Route path={`${path}/:dragonID`}>
                    <Dragon />
                </Route>
            </Switch>
        </div>
    );
};
