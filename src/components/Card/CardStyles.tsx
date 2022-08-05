export interface stylesProps {
    [index: string]: string
}
const styles: stylesProps = {
    container: `card rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl overflow-hidden`,
    noShadow: `shadow-none border`,
    figure: 'card__figure rounded-2xl',
    image: 'card__image w-full h-full min-h-[200px] object-cover',
    body: 'card__body p-6 lg:p-8',
    header: 'card__header pb-2 lg:pb-4 text-xl font-bold',
    content: 'card__content font-light',
    footer: 'card__footer pt-4 lg:pt-8',
}

export default styles
