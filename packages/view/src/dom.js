"use strict";
exports.__esModule = true;
var JsxDom = /** @class */ (function () {
    function JsxDom() {
        this._our_document = null;
    }
    Object.defineProperty(JsxDom.prototype, "document", {
        get: function () {
            var _our_document = this._our_document;
            return _our_document !== null && _our_document !== void 0 ? _our_document : globalThis.document;
        },
        set: function (d) {
            this._our_document = d;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JsxDom.prototype, "Node", {
        get: function () {
            var _our_node = this._our_node;
            return _our_node !== null && _our_node !== void 0 ? _our_node : globalThis.Node;
        },
        set: function (n) {
            this._our_node = n;
        },
        enumerable: false,
        configurable: true
    });
    JsxDom.prototype.useGlobalDocument = function () {
        this._our_document = null;
    };
    JsxDom.prototype.useGlobalNode = function () {
        this._our_node = null;
    };
    return JsxDom;
}());
exports["default"] = new JsxDom();
