import React, { FC, ReactNode } from 'react'
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

const CardContainer: FC<CardProps & JSX.IntrinsicElements['div']> = (props): JSX.Element => {
    const { noShadown, squared, className = '', children } = props
    const noShadownStyles = noShadown ? '' : styles.shadow
    const squaredStyles = squared ? '' : styles.rounded
    return (
        <div
            {...props}
            className={`${styles.container} ${noShadownStyles} ${squaredStyles} ${className}`}
        >
            {children}
        </div>
    )
}

export const Card = Object.assign(CardContainer, {
    Image: CardImage,
    Body: CardBody,
    Footer: CardFooter,
})

CardContainer.displayName = 'Card'
CardImage.displayName = 'Card.Image'
CardBody.displayName = 'Card.Body'
CardFooter.displayName = 'Card.Footer'
