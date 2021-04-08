import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import axios from "axios";

import { VerticalSpacing } from "components/shared-styles";
import { Content, ContentLink, Grid, GridItem, SubHeading, Title } from "../../tab-styles";

export interface IDragonsListProps {
    className?: string;
}

export const DragonsList: React.FC<IDragonsListProps> = ({ className }) => {
    const { url } = useRouteMatch();

    const [listOfDragons, setListOfDragons] = useState<any>([]);

    useEffect(() => {
        const abortController = new AbortController();

        return function cleanup() {
            abortController.abort();
        };

        const getDragons = async () => {
            try {
                const response = await axios.get(`https://api.spacexdata.com/v3/dragons`);
                setListOfDragons(response.data);
            } catch (error) {
                console.error(error);
            }
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
