import React, { FC } from 'react'
import styles from './FormStyles'

export type OptionsType = {
    label: string
    value: string
}

export interface FormSelectProps
    extends React.DetailedHTMLProps<
        React.SelectHTMLAttributes<HTMLSelectElement>,
        HTMLSelectElement
    > {
    full?: boolean
    options: OptionsType[]
}

const FormSelect: FC<FormSelectProps> = (props): JSX.Element => {
    const { full, options } = props
    const fullClassName = full ? styles.inputFull : ''
    return (
        <div className={`${styles.selectContainer} ${fullClassName}`}>
            <select className={`${styles.select} ${fullClassName}`} {...props}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}
export default FormSelect
