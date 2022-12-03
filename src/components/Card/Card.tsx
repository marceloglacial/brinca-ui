import React, { FC } from 'react'

export interface CardProps {
    title: string
    description?: string
    image?: React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
    >
}

const Card: FC<CardProps> = ({ title, description, image }): JSX.Element => {
    return (
        <div className={styles.card}>
            {image && (
                <figure className={styles.figure}>
                    <img
                        src={image.src}
                        alt={image?.alt}
                        className={styles.image}
                        {...image}
                    />
                </figure>
            )}
            <div className={styles.body}>
                <h3 className={styles.title}>{title}</h3>
                {description && <p>{description}</p>}
            </div>
        </div>
    )
}
export default Card

const styles = {
    card: `card  border rounded-lg shadow-xl flex flex-col overflow-hidden transition-transform hover:scale-95 hover:cursor-pointer`,
    figure: `card__image overflow-hidden aspect-video`,
    image: `w-full h-full object-cover`,
    body: `card__body p-6`,
    title: `font-bold text-2xl`,
}
