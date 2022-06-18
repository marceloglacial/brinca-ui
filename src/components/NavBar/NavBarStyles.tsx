export interface stylesProps {
    [index: string]: string
}
const styles: stylesProps = {
    container: `navbar flex items-center gap-8 w-full`,
    brand: `navbar__brand flex items-center`,
    social: `navbar__social flex items-center`,
    content: `navbar__content flex items-center gap-8 w-full justify-end`,
    footer: `bg-green-600 text-white py-4 px-8 rounded-2xl flex items-center gap-8`,
    top: ``,
}

export default styles
