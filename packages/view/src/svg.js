"use strict";
exports.__esModule = true;
exports.parseSvgElement = exports.isSvgTag = void 0;
var index_1 = require("./index");
var SVG_TAGS = [
    "circle",
    "clipPath",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "foreignObject",
    "g",
    // "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    // "script",
    "stop",
    // "style",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    // "title",
    "tspan",
    "use",
    "view",
];
var SVG_XMLNS = 'http://www.w3.org/2000/svg';
var __experimental_warning_shown = false;
function isSvgTag(tag) {
    return SVG_TAGS.includes(tag);
}
exports.isSvgTag = isSvgTag;
function parseSvgElement(tag, attributes) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var document = index_1.JsxDom.document, Node = index_1.JsxDom.Node;
    if (!__experimental_warning_shown) {
        __experimental_warning_shown = true;
        console.warn('texsaur SVG support is experimental!');
    }
    var element = document.createElementNS(SVG_XMLNS, tag);
    var prop;
    for (var _a = 0, _b = Object.keys(attributes); _a < _b.length; _a++) {
        prop = _b[_a];
        // Extract values:
        prop = prop.toString();
        var value = attributes[prop];
        // Add attributes:
        element.setAttribute(prop, value);
    }
    // append children
    for (var _c = 0, children_1 = children; _c < children_1.length; _c++) {
        var child = children_1[_c];
        if (Array.isArray(child)) {
            element.append.apply(element, child);
            continue;
        }
        if (child instanceof Node) {
            element.appendChild(child);
        }
        else {
            element.append(child);
        }
    }
    return element;
}
exports.parseSvgElement = parseSvgElement;
