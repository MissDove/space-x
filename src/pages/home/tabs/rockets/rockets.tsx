import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import { Grid as MuiGrid } from "@material-ui/core";
import { VerticalSpacing } from "components/shared-styles";

export interface IRocketsProps {
    className?: string;
}

export const Rockets: React.FC<IRocketsProps> = ({ className }) => {
    const [listOfRockets, setListOfRockets] = useState<any>([]);

    useEffect(() => {
        const getRockets = async () => {
            try {
                const response = await axios.get(`https://api.spacexdata.com/v3/rockets`);
                console.log(response);
                setListOfRockets(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        getRockets();
    }, []);

    return (
        <Wrapper className={className}>
            <Grid container spacing={1}>
                {listOfRockets.map((rocket: any, index: any) => (
                    <GridItem item md={6} lg={3} xl={3} key={`list-${index}`}>
                        <Content>
                            <Title>{rocket.rocket_name}</Title>
                            <VerticalSpacing size={16} />
                            <DateLaunched>First launched</DateLaunched>
                            <VerticalSpacing size={8} />
                            <DateLaunched>{rocket.first_flight}</DateLaunched>
                        </Content>
                    </GridItem>
                ))}
            </Grid>
        </Wrapper>
    );
};

const Wrapper = styled.div``;

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

const Content = styled.div`
    width: 100%;
    min-height: 300px;
    margin-bottom: 32px;

    background: ${({ theme }) => theme.darkGrey};
    border-radius: ${({ theme }) => theme.radius1};
    padding: 24px 16px;
`;

const Title = styled.p`
    color: ${({ theme }) => theme.primaryBlue};
    text-align: center;
    font-size: 32px;
    font-weight: 600;
`;

const DateLaunched = styled.p`
    color: ${({ theme }) => theme.primaryRed};
    text-align: center;
    font-size: 20px;
    font-weight: 600;
`;

{
    /*<Image src={rocket.flickr_images[0]} alt="Rocket" />*/
}
// const Image = styled.img`
//     padding: 0;
//     display: block;
//     width: 200px;
//     height: 200px;
//     border-radius: ${({ theme }) => theme.radius1};
// `;
