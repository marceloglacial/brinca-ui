import React from 'react';
import styles from './CardStyles';
const Card = ({ title, description, image, footer, shadow = true, rounded = true, }) => {
    const shadowStyles = shadow ? styles.shadow : '';
    const roundedStyles = rounded ? styles.rounded : '';
    return (React.createElement("div", { className: `${styles.card} ${shadowStyles} ${roundedStyles}` },
        image && React.createElement("figure", { className: styles.figure }, image),
        React.createElement("div", { className: styles.body },
            React.createElement("div", { className: styles.title }, title),
            description && (React.createElement("div", { className: styles.description }, description))),
        footer && React.createElement("div", { className: styles.footer }, footer)));
};
export default Card;
//# sourceMappingURL=Card.js.map