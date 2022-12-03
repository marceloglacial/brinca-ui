"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ButtonStyles_1 = __importDefault(require("./ButtonStyles"));
const Button = (props) => {
    const { variant = 'primary', children, full } = props;
    return (react_1.default.createElement("button", Object.assign({ className: `${ButtonStyles_1.default.button} ${ButtonStyles_1.default[variant]} ${full && ButtonStyles_1.default.full}` }, props), children));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map