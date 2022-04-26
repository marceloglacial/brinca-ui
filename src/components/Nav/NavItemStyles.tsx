import globalStyles from '@styles/GlobalStyles'

export interface stylesProps {
    container: string
    top: { [index: string]: string }
    bottom: { [index: string]: string }
    menu: string
}
const styles: stylesProps = {
    container: `nav__item flex items-center justify-center`,
    top: {
        link: globalStyles.link,
    },
    bottom: {
        link: globalStyles.linkWhite,
    },
    menu: `hidden`,
}
export default styles
