"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CardStyles_1 = __importDefault(require("./CardStyles"));
const Card = ({ title, description, image, footer, shadow = true, rounded = true, }) => {
    const shadowStyles = shadow ? CardStyles_1.default.shadow : '';
    const roundedStyles = rounded ? CardStyles_1.default.rounded : '';
    return (react_1.default.createElement("div", { className: `${CardStyles_1.default.card} ${shadowStyles} ${roundedStyles}` },
        image && react_1.default.createElement("figure", { className: CardStyles_1.default.figure }, image),
        react_1.default.createElement("div", { className: CardStyles_1.default.body },
            react_1.default.createElement("div", { className: CardStyles_1.default.title }, title),
            description && (react_1.default.createElement("div", { className: CardStyles_1.default.description }, description))),
        footer && react_1.default.createElement("div", { className: CardStyles_1.default.footer }, footer)));
};
exports.default = Card;
//# sourceMappingURL=Card.js.map