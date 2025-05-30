import { ReactNode, ComponentPropsWithoutRef, ReactElement, FC } from 'react'
import { ButtonSizeTypes } from '..'
import styles from './LinkStyles'

export type LinkTypes = 'default' | 'primary' | 'secondary' | 'white'
export interface LinkProps {
    variant?: LinkTypes
    full?: boolean
    children: ReactNode
    size?: ButtonSizeTypes
}

export const Link: FC<LinkProps & ComponentPropsWithoutRef<'div'>> = (props): ReactElement => {
    const { variant = 'default', children, full, size = 'md' } = props
    const isFullClassName = full ? styles.full : ''
    const isButton = !['default', 'white'].includes(variant)
    const linkSize = isButton ? (styles.size as any)[size] : ''
    const componentProps = {
        ...props,
        full: undefined,
        className: `${(styles as any)[variant]} ${isFullClassName} ${linkSize} `,
    }
    return <div {...componentProps}>{children}</div>
}
