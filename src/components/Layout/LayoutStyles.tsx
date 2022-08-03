export interface stylesProps {
    [index: string]: string
}
const styles: stylesProps = {
    container: `page-layout max-w-screen-lg mx-auto flex flex-col gap-4 lg:gap-8`,
    header: 'page-header',
    footer: 'page-footer',
}

export default styles
