import React from 'react';
export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger';
    full?: boolean;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
