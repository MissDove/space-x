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
    StyledImage,
    // StyledImageCarousel,
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
            name: "ship_type",
            value: ship?.ship_type,
        },
        {
            name: "mass",
            value: ship?.weight_kg,
            unit: "kg",
        },
        {
            name: "year built",
            value: ship?.year_built,
        },
    ];

    return (
        <Wrapper className={className}>
            <NameWrapper>
                <Name status={ship?.active}>{ship?.ship_name}</Name>
            </NameWrapper>
            <VerticalSpacing size={48} />
            <CardsContainer>
                <CardWrapper>
                    <VerticalSpacing size={16} />
                    {/*{ship?.flickr_images && <StyledImageCarousel images={ship?.flickr_images} />}*/}
                    <StyledImage src={ship?.image ? ship?.image : ""} />
                    <CardContent>
                        <Description>Just some ship being shown here</Description>
                    </CardContent>
                </CardWrapper>
                <CardWrapper>
                    <CardContent>
                        {shipData.map((detail, index) => (
                            <div key={index}>
                                {detail.value !== null && (
                                    <Detail>
                                        {detail.name}
                                        <span>
                                            {detail.value}
                                            {detail.unit && detail.unit}
                                        </span>
                                    </Detail>
                                )}
                                <VerticalSpacing size={12} />
                            </div>
                        ))}
                    </CardContent>
                </CardWrapper>
            </CardsContainer>
        </Wrapper>
    );
};
