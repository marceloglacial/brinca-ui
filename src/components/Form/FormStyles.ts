import * as buttonStyles from '../Button/ButtonStyles'
const buttonClass = buttonStyles.default

type stylesType = {
    [k: string]: string
}

const formButtonClass = `form__button ${buttonClass.button} ${buttonClass.size.md} cursor-pointer ${buttonClass.secondary}`
const focusClassName = `focus-visible:outline-green-600 focus-visible:outline-offset-2 focus-visible:outline-2`

const styles: stylesType = {
    button: `${formButtonClass}`,
    checkbox: `form__checkbox appearance-none relative hover:cursor-pointer after:block after:w-6 after:h-6 after:checked:bg-green-600 after:rounded-lg after:border-2 after:border-green-600 focus:ring-green-500 focus:ring-2 before:absolute before:top-[4px] before:left-[3px] before:z-10 before:checked:block before:w-4 before:h-4 before:checked:bg-[url('https://res.cloudinary.com/brinca/image/upload/v1671588190/brinca-ui/checkbox-white_dqjam0.svg')] before:bg-no-repeat before:bg-cover`,
    disabled: `form__disabled disabled:opacity-50  disabled:cursor-not-allowed disabled:bg-white disabled:text-gray-600 disabled:border-gray-400 disabled:before:border-gray-400 disabled:after:border-gray-400`,
    form: `form mx-auto max-w-2xl space-y-8`,
    group: `form__group flex flex-wrap gap-4 items-center`,
    inputFull: `w-full`,
    label: `form__label font-bold`,
    radio: `form__radio appearance-none  relative hover:cursor-pointer after:block after:w-6 after:h-6 after:checked:bg-green-600 after:rounded-full after:border-2 after:border-green-600 focus:ring-green-500 focus:ring-2 before:absolute before:top-[7px] before:left-[7px] before:z-10 before:rounded-full before:checked:block before:w-[10px] before:h-[10px] before:bg-white  ${focusClassName}`,
    select: `form__select appearance-none relative rounded-2xl border-2 border-green-600 py-4 pl-4 pr-10 bg-transparent z-10 ${focusClassName}`,
    selectContainer: `form__select-container inline-block relative after:absolute after:top-4 after:right-3 after:flex after:items-center after:justify-center after:leading-none after:w-4 after:h-4 after:text-xl after:text-green-600 after:content-['⌄'] after:z-0`,
    submit: `${formButtonClass}`,
    text: `form__input rounded-2xl border-2 border-green-600 py-4 px-6 ${focusClassName}`,
    textarea: `form__textarea rounded-2xl border-2 border-green-600 py-4 px-6 ${focusClassName}`,
}

export default styles
