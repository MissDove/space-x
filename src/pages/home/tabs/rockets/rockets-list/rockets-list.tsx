import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";

import { VerticalSpacing } from "components/shared-styles";
import { Content, ContentLink, Grid, GridItem, SubHeading, Title } from "../../tab-styles";

export interface IRocketsListProps {
    className?: string;
}

export const RocketsList: React.FC<IRocketsListProps> = ({ className }) => {
    const { url } = useRouteMatch();

    const [listOfRockets, setListOfRockets] = useState<any>([]);

    useEffect(() => {
        const getRockets = async () => {
            const response = await fetch(`https://api.spacexdata.com/v3/rockets`);

            const rocketData = await response.json();

            setListOfRockets(rocketData);
        };
        getRockets();
    }, []);

    return (
        <div className={className}>
            <Grid container spacing={1}>
                {listOfRockets.map((rocket: any, index: any) => (
                    <GridItem item md={6} lg={3} xl={3} key={`list-${index}`}>
                        <ContentLink to={`${url}/${rocket.rocket_id}`}>
                            <Content>
                                <Title>{rocket.rocket_name}</Title>
                                <VerticalSpacing size={16} />
                                <SubHeading data-testid="rocket-status" status={rocket.active}>
                                    {rocket.active ? "active" : "inactive"}
                                </SubHeading>
                            </Content>
                        </ContentLink>
                    </GridItem>
                ))}
            </Grid>
        </div>
    );
};
