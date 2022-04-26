export interface stylesProps {
    [index: string]: string
}
const styles: stylesProps = {
    container: `navbar flex items-center gap-4 py-8 bg-slate-100`,
    brand: `navbar__brand flex items-center`,
    content: `navbar__content flex items-center gap-24 w-full justify-end`,
}

export default styles
