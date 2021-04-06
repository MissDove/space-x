export interface IDragonsProps {
    className?: string;
}

export const Dragons: React.FC<IDragonsProps> = ({ className }) => {
    return <div className={className}>This is going to be Dragons component</div>;
};
