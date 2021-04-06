import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import { Grid } from "@material-ui/core";
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
            <Grid container spacing={4} direction="row" justify="space-between" alignItems="baseline">
                {listOfRockets.map((rocket: any, index: any) => (
                    <GridItem item key={index}>
                        <Image src={rocket.flickr_images[0]} alt="Rocket" />
                        <VerticalSpacing size={16} />
                        <p>Name: {rocket.rocket_name}</p>
                    </GridItem>
                ))}
            </Grid>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 0;
`;

const GridItem = styled(Grid)`
    padding: 12px;
    //background: ${({ theme }) => theme.lightGrey};
    border-radius: ${({ theme }) => theme.radius1};
`;

const Image = styled.img`
    padding: 0;
    display: block;
    width: 200px;
    height: 200px;
    border-radius: ${({ theme }) => theme.radius1};
`;
