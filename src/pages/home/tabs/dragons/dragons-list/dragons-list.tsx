import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";

import { VerticalSpacing } from "components/shared-styles";
import { Content, ContentLink, Grid, GridItem, SubHeading, Title } from "../../tab-styles";

export interface IDragonsListProps {
    className?: string;
}

export const DragonsList: React.FC<IDragonsListProps> = ({ className }) => {
    const { url } = useRouteMatch();

    const [listOfDragons, setListOfDragons] = useState<any>([]);

    useEffect(() => {
        const getDragons = async () => {
            const response = await fetch(`https://api.spacexdata.com/v3/dragons`);

            const dragonData = await response.json();

            setListOfDragons(dragonData);
        };
        getDragons();
    }, []);

    return (
        <div className={className}>
            <Grid container spacing={1}>
                {listOfDragons.map((dragon: any, index: any) => (
                    <GridItem item md={6} lg={3} xl={3} key={`list-${index}`}>
                        <ContentLink to={`${url}/${dragon.id}`}>
                            <Content>
                                <Title>{dragon.name}</Title>
                                <VerticalSpacing size={16} />
                                <SubHeading status={dragon.active}>{dragon.active ? "active" : "inactive"}</SubHeading>
                            </Content>
                        </ContentLink>
                    </GridItem>
                ))}
            </Grid>
        </div>
    );
};
