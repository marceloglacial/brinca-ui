import globalStyles from '@styles/GlobalStyles'

export interface stylesProps {
    [index: string]: string
}
const styles: stylesProps = {
    container: `nav flex flex-col lg:flex-row items-center gap-8`,
    item: `${globalStyles.link}`,
    itemAccent: `nav__item--accent ${globalStyles.linkWhite}`,
}

export default styles
