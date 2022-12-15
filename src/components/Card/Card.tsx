import React, { ReactNode } from 'react'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
import CardImage from './CardImage'
import styles from './CardStyles'

export interface CardProps {
    noShadown?: boolean
    squared?: boolean
    className?: string
    children: ReactNode
}

const Card = ({
    noShadown,
    squared,
    className = '',
    children,
}: CardProps): JSX.Element => {
    const noShadownStyles = noShadown ? '' : styles.shadow
    const squaredStyles = squared ? '' : styles.rounded
    return (
        <div
            className={`${styles.container} ${noShadownStyles} ${squaredStyles} ${className}`}
        >
            {children}
        </div>
    )
}

Card.Image = CardImage
Card.Body = CardBody
Card.Footer = CardFooter

export default Card
