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

export interface IDragonProps {
    className?: string;
}

export const Dragon: React.FC<IDragonProps> = ({ className }) => {
    const { dragonID } = useParams<{ dragonID: string }>();

    const [dragon, setDragon] = useState<any>();

    useEffect(() => {
        const getDragon = async () => {
            const response = await fetch(`https://api.spacexdata.com/v3/dragons/${dragonID}`);

            const data = await response.json();

            setDragon(data);
        };
        getDragon();
    }, [dragonID]);

    const dragonData = [
        {
            name: "type",
            value: dragon?.type,
        },
        {
            name: "diameter",
            value: dragon?.diameter.meters,
            unit: "m",
        },
        {
            name: "height",
            value: dragon?.height_w_trunk.meters,
            unit: "m",
        },
        {
            name: "mass",
            value: dragon?.dry_mass_kg,
            unit: "kg",
        },
        {
            name: "first flight",
            value: dragon?.first_flight,
        },
    ];

    return (
        <Wrapper className={className}>
            <NameWrapper>
                <Name status={dragon?.active}>{dragon?.name}</Name>
            </NameWrapper>
            <VerticalSpacing size={48} />
            <CardsContainer>
                <CardWrapper>
                    <VerticalSpacing size={16} />
                    {dragon?.flickr_images && <StyledImageCarousel images={dragon?.flickr_images} />}
                    <CardContent>
                        <Description>{dragon?.description}</Description>
                    </CardContent>
                </CardWrapper>
                <CardWrapper>
                    <CardContent>
                        {dragonData.map((detail, index) => (
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
                    </CardContent>
                </CardWrapper>
            </CardsContainer>
        </Wrapper>
    );
};
