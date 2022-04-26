export interface globalStylesProps {
    [index: string]: string
}
const globalStyles: globalStylesProps = {
    link: `hover:text-green-600 relative
           after:w-0 after:absolute after:block after:bg-green-600 after:h-[3px] after:rounded-full
           hover:after:w-full after:transition-all ease-in-out`,
    linkWhite: `hover:text-white relative
           after:w-0 after:absolute after:block after:bg-white after:h-[1px] after:rounded-full
           hover:after:w-full after:transition-all ease-in-out`,
}
export default globalStyles
