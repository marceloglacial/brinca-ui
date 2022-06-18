export interface stylesProps {
    [index: string]: string
}
const styles: stylesProps = {
    container: `card rounded-2xl shadow-2xl overflow-hidden`,
    figure: 'card__figure rounded-2xl',
    image: 'card__image w-full h-full object-cover',
    body: 'card__body p-8',
    header: 'card__header pb-4 text-xl font-bold',
    content: 'card__content font-light',
    footer: 'card__footer pt-8',
}

export default styles
