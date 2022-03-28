export interface stylesProps {
    [index: string]: string
}
const styles: stylesProps = {
    container: `rounded-2xl shadow-2xl overflow-hidden`,
    figure: 'rounded-2xl',
    image: 'w-full h-full object-cover',
    body: 'p-8',
    header: 'pb-4 text-xl',
    content: 'font-light',
    footer: 'pt-8',
}

export default styles
