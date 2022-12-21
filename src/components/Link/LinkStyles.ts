import * as buttonStyles from '../Button/ButtonStyles'

const button = buttonStyles.default
const afterLine = `after:w-0
                    relative
                    after:absolute
                    after:block
                    after:h-[3px]
                    after:rounded-full
                    hover:after:w-full 
                    after:transition-all
                    ease-in-out 
                    whitespace-nowrap
                `

const styles = {
    primary: `link link--primary ${button.button} ${button.primary}`,
    secondary: `link link--secondary ${button.button} ${button.secondary}`,
    default: `link
                font-normal
                hover:text-green-600 
                after:bg-green-600
                ${afterLine}`,
    white: `link--white 
            font-normal
            text-white
            after:bg-white
            ${afterLine}`,
    full: `link--full ${button.full} inline-block text-center`,
    size: button.size,
}
export default styles
