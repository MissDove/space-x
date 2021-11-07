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

export interface IShipProps {
    className?: string;
}

export const Ship: React.FC<IShipProps> = ({ className }) => {
    const { shipID } = useParams<{ shipID: string }>();

    // create interface for ship object
    const [ship, setShip] = useState<any>();

    useEffect(() => {
        const getShip = async () => {
            const response = await fetch(`https://api.spacexdata.com/v3/ships/${shipID}`);

            const data = await response.json();

            setShip(data);
        };
        getShip();
    }, [shipID]);

    const shipData = [
        {
            name: "type",
            value: ship?.type,
        },
        {
            name: "diameter",
            value: ship?.diameter.meters,
            unit: "m",
        },
        {
            name: "height",
            value: ship?.height_w_trunk.meters,
            unit: "m",
        },
        {
            name: "mass",
            value: ship?.dry_mass_kg,
            unit: "kg",
        },
        {
            name: "first flight",
            value: ship?.first_flight,
        },
    ];

    return (
        <Wrapper className={className}>
            <NameWrapper>
                <Name status={ship?.active}>{ship?.name}</Name>
            </NameWrapper>
            <VerticalSpacing size={48} />
            <CardsContainer>
                <CardWrapper>
                    <VerticalSpacing size={16} />
                    {ship?.flickr_images && <StyledImageCarousel images={ship?.flickr_images} />}
                    <CardContent>
                        <Description>{ship?.description}</Description>
                    </CardContent>
                </CardWrapper>
                <CardWrapper>
                    <CardContent>
                        {shipData.map((detail, index) => (
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
