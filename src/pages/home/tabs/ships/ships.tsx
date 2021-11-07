import { Route, Switch, useRouteMatch } from "react-router-dom";

import { ShipsList } from "./ships-list";
import { Ship } from "./ship";

export interface IShipsProps {
    className?: string;
}

export const Ships: React.FC<IShipsProps> = ({ className }) => {
    const { path } = useRouteMatch();

    return (
        <div className={className}>
            <Switch>
                <Route exact path={path}>
                    <ShipsList />
                </Route>
                <Route path={`${path}/:shipID`}>
                    <Ship />
                </Route>
            </Switch>
        </div>
    );
};
