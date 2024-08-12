import { FC } from 'react'
import styles from './FormStyles'

export type OptionsType = {
    label: string
    value: string
}

export interface FormSelectProps {
    full?: boolean
    options: OptionsType[]
}

const FormSelect: FC<FormSelectProps & JSX.IntrinsicElements['select']> = (props): JSX.Element => {
    const { full, options, ...selectProps } = props
    const fullClassName = full ? styles.inputFull : ''
    const disabledClassname = props.disabled ? styles.disabled : ''
    return (
        <div className={`${styles.selectContainer} ${fullClassName}`}>
            <select
                {...selectProps}
                className={`${styles.select} ${fullClassName} ${disabledClassname}`}
            >
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
