import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";

import { VerticalSpacing } from "components/shared-styles";
import { Content, ContentLink, Grid, GridItem, SubHeading, Title } from "../../tab-styles";

export interface IShipsListProps {
    className?: string;
}

export const ShipsList: React.FC<IShipsListProps> = ({ className }) => {
    const { url } = useRouteMatch();

    // create interface for ships object
    const [listOfShips, setListOfShips] = useState<any>([]);

    useEffect(() => {
        const getShips = async () => {
            const response = await fetch(`https://api.spacexdata.com/v3/ships`);

            const shipData = await response.json();

            setListOfShips(shipData);
        };
        getShips();
    }, []);

    return (
        <div className={className}>
            <Grid container spacing={1}>
                {listOfShips.map((ship: any, index: any) => (
                    <GridItem item md={6} lg={3} xl={3} key={`list-${index}`}>
                        <ContentLink to={`${url}/${ship.id}`}>
                            <Content>
                                <Title>{ship.name}</Title>
                                <VerticalSpacing size={16} />
                                <SubHeading status={ship.active}>{ship.active ? "active" : "inactive"}</SubHeading>
                            </Content>
                        </ContentLink>
                    </GridItem>
                ))}
            </Grid>
        </div>
    );
};
