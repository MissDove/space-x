import { Route, Switch, useRouteMatch } from "react-router-dom";

import { RocketsList } from "./rockets-list";
import { Rocket } from "./rocket";

export interface IRocketsProps {
    className?: string;
}

export const Rockets: React.FC<IRocketsProps> = ({ className }) => {
    const { path } = useRouteMatch();

    return (
        <div className={className}>
            <Switch>
                <Route exact path={path}>
                    <RocketsList />
                </Route>
                <Route path={`${path}/:rocketID`}>
                    <Rocket />
                </Route>
            </Switch>
        </div>
    );
};
