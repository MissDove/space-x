import { useEffect, useState } from "react";
import { Route, Switch, Link, useRouteMatch } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import { Grid as MuiGrid } from "@material-ui/core";
import { VerticalSpacing } from "components/shared-styles";
import { Rocket } from "./rocket";

export interface IRocketsProps {
    className?: string;
}

export const Rockets: React.FC<IRocketsProps> = ({ className }) => {
    const { url, path } = useRouteMatch();

    const [listOfRockets, setListOfRockets] = useState<any>([]);

    useEffect(() => {
        const getRockets = async () => {
            try {
                const response = await axios.get(`https://api.spacexdata.com/v3/rockets`);
                // console.log(response);
                console.log(response.data);
                setListOfRockets(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        getRockets();
    }, []);

    return (
        <div className={className}>
            <Switch>
                <Route exact path={path}>
                    <Grid container spacing={1}>
                        {listOfRockets.map((rocket: any, index: any) => (
                            <GridItem item md={6} lg={3} xl={3} key={`list-${index}`}>
                                <ContentLink to={`${url}/${rocket.rocket_id}`}>
                                    <Content>
                                        <Title>{rocket.rocket_name}</Title>
                                        <VerticalSpacing size={16} />
                                        <SubHeading status={rocket.active}>
                                            {rocket.active ? "active" : "inactive"}
                                        </SubHeading>
                                    </Content>
                                </ContentLink>
                            </GridItem>
                        ))}
                    </Grid>
                </Route>
                <Route path={`${path}/:rocketID`}>
                    <Rocket />
                </Route>
            </Switch>
        </div>
    );
};

export const Grid = styled(MuiGrid)`
    #root & {
        margin-top: 0;
        margin-bottom: 0;
    }
`;

export const GridItem = styled(MuiGrid)`
    #root & {
        padding-top: 0;
        padding-bottom: 0;
    }
`;

const ContentLink = styled(Link)`
    text-decoration: none;
`;

const Content = styled.div`
    width: 100%;
    margin-bottom: 32px;
    background: ${({ theme }) => theme.darkGrey};
    border-radius: ${({ theme }) => theme.radius2};
    padding: 24px 16px;
    box-shadow: 5px 5px 0 0 ${({ theme }) => theme.primaryGreen};
`;

const Title = styled.p`
    color: ${({ theme }) => theme.primaryBackground};
    text-align: center;
    font-size: 32px;
    font-weight: 600;
`;

const SubHeading = styled.p<{ status?: boolean }>`
    color: ${({ theme, status }) => (status ? `${theme.primaryBlue}` : `${theme.primaryRed}`)};
    text-align: center;
    font-size: 16px;
    text-transform: uppercase;
`;
