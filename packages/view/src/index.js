"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.JsxDom = exports.render = void 0;
/// <reference path="../JSX.d.ts" />
var dom_1 = require("./dom");
var svg = require("./svg");
function __jsx(tag, properties) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var document = dom_1["default"].document, Node = dom_1["default"].Node;
    if (typeof tag === 'function') {
        return tag(properties !== null && properties !== void 0 ? properties : {}, children);
    }
    if (svg.isSvgTag(tag)) {
        return svg.parseSvgElement.apply(svg, __spreadArray([tag, properties !== null && properties !== void 0 ? properties : {}], children, false));
    }
    var element = document.createElement(tag);
    var map = (properties !== null && properties !== void 0 ? properties : {});
    var prop;
    for (var _a = 0, _b = Object.keys(map); _a < _b.length; _a++) {
        prop = _b[_a];
        var warn = function (expected, actual) { return console.warn(tag, "received incorrect value type for property '".concat(prop, "': expected "), expected, "instead of", typeof actual); };
        // Extract values:
        prop = prop.toString();
        var value = map[prop];
        // Map known properties:
        switch (prop) {
            case "class": {
                if (typeof value === 'string') {
                    element.className = value;
                }
                else {
                    warn('string', typeof value);
                }
                continue;
            }
            case "style": {
                if (typeof value === 'object') {
                    for (var _c = 0, _d = Object.entries(value); _c < _d.length; _c++) {
                        var _e = _d[_c], k = _e[0], v = _e[1];
                        var styleProperty = k;
                        if (typeof v !== 'string') {
                            continue;
                        }
                        element.style[styleProperty] = v;
                    }
                }
                else if (typeof value === 'string') {
                    break;
                }
                else {
                    warn('object', typeof value);
                }
                continue;
            }
        }
        // Event callbacks:
        if (/^on/.test(prop)) {
            if (typeof value === 'function') {
                element.addEventListener(prop.substring(2), map[prop]);
            }
            else {
                warn('function', typeof value);
            }
            continue;
        }
        // Everything else:
        try {
            var anyReference = element;
            if (typeof anyReference[prop] === 'undefined') {
                // As a fallback, attempt to set an attribute:
                element.setAttribute(prop, value);
            }
            else {
                anyReference[prop] = value;
            }
        }
        catch (error) {
            console.error("Could not set ".concat(prop, " on ").concat(element.tagName), error);
            warn(typeof element[prop], typeof value);
        }
    }
    // append children
    for (var _f = 0, _g = children.flat(); _f < _g.length; _f++) {
        var child = _g[_f];
        if (child instanceof Node) {
            element.appendChild(child);
            continue;
        }
        if (Array.isArray(child)) {
            element.append.apply(element, child);
            continue;
        }
        element.append(child);
    }
    return element;
}
function Fragment(_, children) {
    return children;
}
var jsx = __jsx;
jsx.Fragment = Fragment;
var render = function (el, container) {
    container.appendChild(el);
};
exports.render = render;
var dom_2 = require("./dom");
__createBinding(exports, dom_2, "default", "JsxDom");
exports["default"] = jsx;
