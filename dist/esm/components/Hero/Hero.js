import React from 'react';
import styles from './HeroStyles';
const Hero = ({ title, description, image, footer, shadow = true, rounded = true, reversed, }) => {
    const shadowStyles = shadow ? styles.shadow : '';
    const roundedStyles = rounded ? styles.rounded : '';
    const reverSedStyles = reversed ? styles.reversed : '';
    return (React.createElement("div", { className: `${styles.hero} ${reverSedStyles}` },
        image && (React.createElement("figure", { className: `${styles.figure} ${shadowStyles} ${roundedStyles}` }, image)),
        React.createElement("div", { className: styles.body },
            React.createElement("div", { className: styles.title }, title),
            description && (React.createElement("div", { className: styles.description }, description)),
            footer && React.createElement("div", { className: styles.footer }, footer))));
};
export default Hero;
//# sourceMappingURL=Hero.js.map