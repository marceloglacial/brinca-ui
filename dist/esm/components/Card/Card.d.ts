import { FC, ReactNode } from 'react';
export interface CardProps {
    title: ReactNode;
    description?: ReactNode;
    image?: ReactNode;
    footer?: ReactNode;
    shadow?: boolean;
    rounded?: boolean;
}
declare const Card: FC<CardProps>;
export default Card;
