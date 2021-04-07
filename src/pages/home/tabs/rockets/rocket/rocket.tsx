import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

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
        <div className={className}>
            <Image src={rocket?.flickr_images[0]} alt="Rocket" />
            <p>{rocket?.description}</p>
            <p>{rocket?.diameter.meters}</p>
            <p>{rocket?.height.meters}</p>
        </div>
    );
};

const Image = styled.img`
    padding: 0;
    display: block;
    width: 200px;
    height: 200px;
    border-radius: ${({ theme }) => theme.radius1};
`;
