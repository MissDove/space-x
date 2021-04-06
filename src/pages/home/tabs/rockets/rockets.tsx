export interface IRocketsProps {
    className?: string;
}

export const Rockets: React.FC<IRocketsProps> = ({ className }) => {
    return <div className={className}>This is going to be Rockets component</div>;
};
