"use strict";
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDocuments = void 0;
function getDocuments() {
    return __asyncGenerator(this, arguments, function* getDocuments_1() {
        let attribute1 = new Map();
        let attribute2 = new Map();
        let attribute3 = new Map();
        attribute1.set("name", "BREEZ-MJT-GH-B1-DR-A-0001.pdf");
        attribute1.set("role", "A");
        attribute1.set("version", "V1");
        attribute2.set("name", "BREEZ-MJT-GH-GF-DR-A-0001.pdf");
        attribute2.set("role", "A");
        attribute2.set("version", "V2");
        attribute3.set("name", "BREEZ-MJT-ZZ-01-DR-0002.pdf");
        attribute3.set("role", "A");
        attribute3.set("version", "V1");
        let version1 = attribute1;
        let version2 = attribute2;
        let version3 = attribute3;
        let document1 = [version1, version2];
        let document2 = [version3];
        yield yield __await(document1);
        yield yield __await(document2);
    });
}
exports.getDocuments = getDocuments;
