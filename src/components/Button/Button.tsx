import React from 'react'

export interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    variant?: 'primary' | 'secondary' | 'danger'
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    ...props
}) => {
    const { children } = props
    return (
        <button className='bg-green-600 p-4 text-white rounded-lg' {...props}>
            {children}
        </button>
    )
}
