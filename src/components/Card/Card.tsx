import React, { ReactNode } from 'react'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
import CardImage from './CardImage'
import styles from './CardStyles'

export interface CardProps {
    noShadown?: boolean
    square?: boolean
    className?: string
    children: ReactNode
}

const Card = ({
    noShadown,
    square,
    className = '',
    children,
}: CardProps): JSX.Element => {
    const noShadownStyles = noShadown ? '' : styles.shadow
    const squareStyles = square ? '' : styles.rounded
    return (
        <div
            className={`${styles.container} ${noShadownStyles} ${squareStyles} ${className}`}
        >
            {children}
        </div>
    )
}

Card.Image = CardImage
Card.Body = CardBody
Card.Footer = CardFooter

export default Card
