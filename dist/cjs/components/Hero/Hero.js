"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const HeroStyles_1 = __importDefault(require("./HeroStyles"));
const Hero = ({ title, description, image, footer, shadow = true, rounded = true, reversed, }) => {
    const shadowStyles = shadow ? HeroStyles_1.default.shadow : '';
    const roundedStyles = rounded ? HeroStyles_1.default.rounded : '';
    const reverSedStyles = reversed ? HeroStyles_1.default.reversed : '';
    return (react_1.default.createElement("div", { className: `${HeroStyles_1.default.hero} ${reverSedStyles}` },
        image && (react_1.default.createElement("figure", { className: `${HeroStyles_1.default.figure} ${shadowStyles} ${roundedStyles}` }, image)),
        react_1.default.createElement("div", { className: HeroStyles_1.default.body },
            react_1.default.createElement("div", { className: HeroStyles_1.default.title }, title),
            description && (react_1.default.createElement("div", { className: HeroStyles_1.default.description }, description)),
            footer && react_1.default.createElement("div", { className: HeroStyles_1.default.footer }, footer))));
};
exports.default = Hero;
//# sourceMappingURL=Hero.js.map