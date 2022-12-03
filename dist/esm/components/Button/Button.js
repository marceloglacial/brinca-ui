import React from 'react';
import styles from './ButtonStyles';
const Button = (props) => {
    const { variant = 'primary', children, full } = props;
    return (React.createElement("button", Object.assign({ className: `${styles.button} ${styles[variant]} ${full && styles.full}` }, props), children));
};
export default Button;
//# sourceMappingURL=Button.js.map