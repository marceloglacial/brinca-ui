export interface stylesProps {
    [index: string]: string
}
const styles: stylesProps = {
    container: `px-8 py-3 rounded-full`,
    primary: `bg-green-600 text-white hover:bg-white hover:text-green-600 border-green-600 border-2 transition-colors`,
    secondary: `bg-white text-green-600 hover:bg-green-600 hover:text-white border-green-600 border-2 transition-colors`,
}
export default styles
