import styles from './ButtonStyles'

export type ButtonTypes = 'primary' | 'secondary'
export type ButtonSizeTypes = 'sm' | 'md' | 'lg'
export interface ButtonProps {
    variant?: ButtonTypes
    full?: boolean
    size?: ButtonSizeTypes
    disabled?: boolean
}

export const Button: React.FC<ButtonProps & JSX.IntrinsicElements['button']> = (props) => {
    const { variant = 'primary', children, full, size = 'md', disabled } = props
    const fullClassName = full ? styles.full : ''
    const disabledClassName = disabled ? styles.disabled : ''
    const componentProps = {
        ...props,
        full: undefined,
        className: `${styles.button} ${styles[variant]} ${fullClassName} ${styles.size[size]} ${disabledClassName}`,
    }
    return <button {...componentProps}>{children}</button>
}
