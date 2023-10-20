import { ReactNode } from 'react'
import { ButtonSizeTypes } from '..'
import styles from './LinkStyles'

export type LinkTypes = 'default' | 'primary' | 'secondary' | 'white'
export interface LinkProps {
    variant?: LinkTypes
    full?: boolean
    children: ReactNode
    size?: ButtonSizeTypes
}

export const Link: React.FC<LinkProps & JSX.IntrinsicElements['div']> = (props): JSX.Element => {
    const { variant = 'default', children, full, size = 'md' } = props
    const isFullClassName = full ? styles.full : ''
    const componentProps = {
        ...props,
        full: undefined,
        className: `${styles[variant]} ${isFullClassName} ${styles.size[size]} `,
    }
    return <div {...componentProps}>{children}</div>
}
