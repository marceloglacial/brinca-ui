import { FC, ReactNode } from 'react'
import styles from './HeroStyles'

export interface HeroBodyProps {
    children: ReactNode
}

const HeroBody: FC<HeroBodyProps> = ({ children }): JSX.Element => {
    return <figure className={`${styles.body} `}>{children}</figure>
}
export default HeroBody
