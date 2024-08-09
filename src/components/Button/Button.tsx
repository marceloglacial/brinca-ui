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
        className: disabled
            ? `${styles.button} ${disabledClassName} ${styles.size[size]}`
            : `${styles.button} ${styles[variant]} ${fullClassName} ${styles.size[size]}`,
    }
    return <button {...componentProps}>{children}</button>
}
