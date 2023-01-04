import React, { ReactNode } from 'react'
import { ButtonSizeTypes } from '..'
import styles from './LinkStyles'

export type LinkTypes = 'default' | 'primary' | 'secondary' | 'white'
export interface LinkProps {
    variant?: LinkTypes
    full?: boolean
    children: ReactNode
    className?: string
    size?: ButtonSizeTypes
}

export const Link: React.FC<LinkProps & JSX.IntrinsicElements['div']> = (props): JSX.Element => {
    const { variant = 'default', children, full, className = '', size = 'md' } = props
    const isFullClassName = full ? styles.full : ''
    const componentProps = {
        ...props,
        full: undefined,
        className: `${styles[variant]} ${isFullClassName} ${styles.size[size]} ${className}`,
    }
    return <div {...componentProps}>{children}</div>
}
