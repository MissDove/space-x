import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import { VerticalSpacing } from "components/shared-styles";
import { ImageCarousel } from "components/image-carousel";

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
                <Name status={rocket?.active}>{rocket?.rocket_name}</Name>
            </NameWrapper>
            <VerticalSpacing size={48} />
            <CardsContainer>
                <CardWrapper>
                    <VerticalSpacing size={16} />
                    {rocket?.flickr_images && <StyledImageCarousel images={rocket?.flickr_images} />}
                    <CardContent>
                        <Description>{rocket?.description}</Description>
                    </CardContent>
                </CardWrapper>
                <CardWrapper>
                    <CardContent>
                        <Detail>
                            Diameter<span>{rocket?.diameter.meters} m</span>
                        </Detail>
                        <VerticalSpacing size={12} />

                        <Detail>
                            Height<span>{rocket?.height.meters} m</span>
                        </Detail>
                        <VerticalSpacing size={12} />

                        <Detail>
                            Mass<span>{rocket?.mass.kg} kg</span>
                        </Detail>
                        <VerticalSpacing size={12} />

                        <Detail>
                            No of engines<span>{rocket?.engines.number}</span>
                        </Detail>
                        <VerticalSpacing size={12} />

                        <Detail>
                            Landing legs<span>{rocket?.landing_legs.number}</span>
                        </Detail>
                        <VerticalSpacing size={12} />

                        <Detail>
                            Landing legs material<span>{rocket?.landing_legs.material}</span>
                        </Detail>
                        <VerticalSpacing size={12} />

                        <Detail>
                            First flight<span>{rocket?.first_flight}</span>
                        </Detail>

                        <VerticalSpacing size={48} />
                        <Detail>Country</Detail>
                        <VerticalSpacing size={8} />
                        <Detail>
                            <span>{rocket?.country}</span>
                        </Detail>
                    </CardContent>
                </CardWrapper>
            </CardsContainer>
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

const Name = styled.h3<{ status?: boolean }>`
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme, status }) => (status ? `${theme.primaryBlue}` : `${theme.primaryRed}`)};
    transform: rotate(12deg);
`;

const StyledImageCarousel = styled(ImageCarousel)`
    .image-gallery-image {
        max-height: unset;
        height: 225px;
    }

    .image-gallery-svg {
        height: 60px;
        width: 30px;
    }
`;

const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
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

const CardContent = styled.div`
    padding: 16px;
`;

const Description = styled.p`
    font-size: 16px;
    line-height: 1.4;
`;

const Detail = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 12px;
    border-bottom: 1px solid ${({ theme }) => theme.primaryGreen};
    text-transform: uppercase;

    span {
        text-transform: none;
        font-weight: 700;
        font-size: 16px;
    }
`;
