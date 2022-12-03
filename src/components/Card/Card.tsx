import React, { FC, ReactNode } from 'react'

export interface CardProps {
    title: ReactNode
    description?: ReactNode
    image?: ReactNode
    footer?: ReactNode
    shadow?: boolean
    rounded?: boolean
}

const Card: FC<CardProps> = ({
    title,
    description,
    image,
    footer,
    shadow = true,
    rounded = true,
}): JSX.Element => {
    const shadowStyles = shadow ? styles.shadow : ''
    const roundedStyles = rounded ? styles.rounded : ''
    return (
        <div className={`${styles.card} ${shadowStyles} ${roundedStyles}`}>
            {image && <figure className={styles.figure}>{image}</figure>}
            <div className={styles.body}>
                <div className={styles.title}>{title}</div>
                {description && (
                    <div className={styles.description}>{description}</div>
                )}
            </div>
            {footer && <div className={styles.footer}>{footer}</div>}
        </div>
    )
}
export default Card

const styles = {
    card: `card border flex flex-col overflow-hidden transition-transform hover:scale-95 hover:cursor-pointer`,
    figure: `card__image overflow-hidden aspect-video`,
    body: `card__body p-6`,
    title: `card__title font-bold text-2xl`,
    description: `card__description`,
    footer: `card__footer px-6 pb-6`,
    shadow: `card--shadow shadow-xl`,
    rounded: `card--rounded rounded-lg`,
}
