import { FC, ReactNode, ReactElement } from 'react'
import styles from './HeroStyles'

export interface HeroBodyProps {
    children: ReactNode
}

const HeroBody: FC<HeroBodyProps> = ({ children }): ReactElement => {
    return <figure className={`${styles.body} `}>{children}</figure>
}
export default HeroBody
