export interface stylesProps {
    [index: string]: string
}
const styles: stylesProps = {
    container: `navbar flex items-center gap-8 w-full`,
    brand: `navbar__brand flex items-center`,
    social: `navbar__social flex items-center`,
    content: `navbar__content flex items-center gap-8 w-full justify-center lg:justify-end`,
    footer: `navbar__bottom bg-green-600 text-white py-4 px-8 rounded-2xl flex flex-col lg:flex-row items-center gap-8`,
    top: `navbar__top`,
}

export default styles
