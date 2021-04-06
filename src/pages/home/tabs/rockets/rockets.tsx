import { useEffect, useState } from "react";
import axios from "axios";

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
        <div className={className}>
            {listOfRockets.map((rocket: any, index: any) => (
                <div id={index}>
                    <img src={rocket.flickr_images[0]} alt="Rocket image" />
                    <p>Name: {rocket.rocket_name}</p>
                    <p>First flight: {rocket.first_flight}</p>
                </div>
            ))}
        </div>
    );
};
