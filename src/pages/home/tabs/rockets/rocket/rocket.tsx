import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { VerticalSpacing } from "components/shared-styles";

export interface IRocketProps {
    className?: string;
}

export const Rocket: React.FC<IRocketProps> = ({ className }) => {
    const { rocketID } = useParams<{ rocketID: string }>();

    const [rocket, setRocket] = useState<any>();

    useEffect(() => {
        const getRocket = async () => {
            try {
                const response = await axios.get(`https://api.spacexdata.com/v3/rockets/${rocketID}`);
                console.log(response.data);
                setRocket(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        getRocket();
    }, [rocketID]);

    return (
        <Wrapper className={className}>
            <NameWrapper>
                <Name>{rocket?.rocket_name}</Name>
            </NameWrapper>
            <VerticalSpacing size={24} />
            <CardWrapper>
                <Image src={rocket?.flickr_images[0]} alt="Rocket" />
                <VerticalSpacing size={24} />
                <CardContent>
                    <p>{rocket?.description}</p>
                    <p>{rocket?.diameter.meters}</p>
                    <p>{rocket?.height.meters}</p>
                </CardContent>
            </CardWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    margin-bottom: 32px;
`;

const NameWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 200px;
    height: 30px;
    background: ${({ theme }) => theme.primaryGreen};
    border-radius: 50%;
    transform: rotate(-12deg);
    vertical-align: center; ;
`;

const Name = styled.h3`
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.primaryRed};
    transform: rotate(12deg);
`;

const CardWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    color: ${({ theme }) => theme.primaryBackground};
    background: ${({ theme }) => theme.darkGrey};
    border-radius: ${({ theme }) => theme.radius2};
    box-shadow: 5px 5px 0 0 ${({ theme }) => theme.primaryGreen};
`;

const Image = styled.img`
    padding: 0;
    display: block;
    width: 300px;
    height: 300px;
    border-radius: ${({ theme }) => `${theme.radius1} ${theme.radius1} 0 0`};
`;

const CardContent = styled.div``;
