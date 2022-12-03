import { FC, ReactNode } from 'react';
export interface HeroProps {
    title: ReactNode;
    description?: ReactNode;
    image?: ReactNode;
    footer?: ReactNode;
    shadow?: boolean;
    rounded?: boolean;
    reversed?: boolean;
}
declare const Hero: FC<HeroProps>;
export default Hero;
