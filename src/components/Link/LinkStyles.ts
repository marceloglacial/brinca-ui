import * as buttonStyles from '../Button/ButtonStyles'

const styles = {
    ...buttonStyles.default,
    default: `font-normal hover:text-green-600 relative
           after:w-0 after:absolute after:block after:bg-green-600 after:h-[3px] after:rounded-full
           hover:after:w-full after:transition-all ease-in-out`,
    dark: `hover:text-white relative
           after:w-0 after:absolute after:block after:bg-white after:h-[1px] after:rounded-full
           hover:after:w-full after:transition-all ease-in-out`,
    full: `${buttonStyles.default.full} inline-block text-center`,
}
export default styles
