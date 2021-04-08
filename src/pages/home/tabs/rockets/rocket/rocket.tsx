import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { VerticalSpacing } from "components/shared-styles";
import {
    Wrapper,
    Detail,
    CardContent,
    CardsContainer,
    CardWrapper,
    Description,
    Name,
    NameWrapper,
    StyledImageCarousel,
} from "../../item-styles";

export interface IRocketProps {
    className?: string;
}

export const Rocket: React.FC<IRocketProps> = ({ className }) => {
    const { rocketID } = useParams<{ rocketID: string }>();

    const [rocket, setRocket] = useState<any>();

    useEffect(() => {
        const getRocket = async () => {
            const response = await fetch(`https://api.spacexdata.com/v3/rockets/${rocketID}`);

            const data = await response.json();

            setRocket(data);
        };
        getRocket();
    }, [rocketID]);

    const rocketData = [
        {
            name: "type",
            value: rocket?.rocket_type,
        },
        {
            name: "diameter",
            value: rocket?.diameter.meters,
            unit: "m",
        },
        {
            name: "height",
            value: rocket?.height.meters,
            unit: "m",
        },
        {
            name: "mass",
            value: rocket?.mass.kg,
            unit: "kg",
        },
        {
            name: "no of engines",
            value: rocket?.engines.number,
        },
        {
            name: "landing legs",
            value: rocket?.landing_legs.number,
        },
        {
            name: "landing legs material",
            value: rocket?.landing_legs.material,
        },
        {
            name: "first flight",
            value: rocket?.first_flight,
        },
    ];

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
                        {rocketData.map((detail, index) => (
                            <div key={index}>
                                <Detail>
                                    {detail.name}
                                    <span>
                                        {detail.value}
                                        {detail.unit && detail.unit}
                                    </span>
                                </Detail>
                                <VerticalSpacing size={12} />
                            </div>
                        ))}
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
