export interface stylesProps {
    [index: string]: string
}
const styles: stylesProps = {
    container: `btn px-7 lg:px-10 py-2 lg:py-3 rounded-full text-sm lg:text-lg text-center`,
    primary: `btn--primary bg-green-600 text-white hover:bg-white hover:text-green-600 border-green-600 border-2 transition-colors`,
    secondary: `btn--secondary bg-white text-green-600 hover:bg-green-600 hover:text-white border-green-600 border-2 transition-colors`,
    link: 'inline-block w-auto',
    full: 'block w-full',
}
export default styles
