import React from 'react'

export interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    variant?: 'primary' | 'secondary' | 'danger'
}

const Button: React.FC<ButtonProps> = (props) => {
    const { variant = 'primary', children } = props
    const styles = {
        button: `py-2 px-8 rounded-full`,
        primary: `border border-green-600 bg-green-600 text-white`,
        secondary: `border border-green-600 text-green-600`,
    }
    return (
        <button className={`${styles.button} ${styles[variant]}`} {...props}>
            {children}
        </button>
    )
}
export default Button
