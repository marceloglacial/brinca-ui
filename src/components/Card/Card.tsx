import { FC, ReactNode, ComponentPropsWithoutRef, ReactElement } from 'react'
import CardBody from './CardBody'
import CardFooter from './CardFooter'
import CardImage from './CardImage'
import styles from './CardStyles'

export interface CardProps {
    noShadown?: boolean
    squared?: boolean
    children: ReactNode
}

const CardContainer: FC<CardProps & ComponentPropsWithoutRef<'div'>> = (props): ReactElement => {
    const { noShadown, squared, children } = props
    const noShadownStyles = noShadown ? '' : styles.shadow
    const squaredStyles = squared ? '' : styles.rounded
    return (
        <div {...props} className={`${styles.container} ${noShadownStyles} ${squaredStyles}`}>
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
