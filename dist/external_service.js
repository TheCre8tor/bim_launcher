"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
exports.Document = exports.getDocuments = void 0;
function getDocuments() {
    return __asyncGenerator(this, arguments, function* getDocuments_1() {
        const PER_PAGE = 10;
        const PAGE = 1;
        let response = yield __await(getDocmuentPaged(PER_PAGE, PAGE));
        for (let document of response) {
            yield yield __await(document);
        }
    });
}
exports.getDocuments = getDocuments;
class Document {
    constructor(name) {
        this.version = [
            { version: "V1", role: "A" },
            { version: "V1", role: "A" },
            { version: "V2", role: "A" },
            { version: "V", role: "A" },
        ];
        this.name = name;
    }
}
exports.Document = Document;
function generateMultipleDocuments(count) {
    let documents = [];
    for (let i = 1; i <= count; i++) {
        let documentName = `BREEZ-MJT-GH-B1-DR-A-0${i}.pdf`;
        documents.push(new Document(documentName));
    }
    return documents;
}
/**
 * @param {number} perPage - number of documents in one page
 * @param {number} page - the page order to get, first page is 1
 */
function getDocmuentPaged(perPage, page) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = generateMultipleDocuments(100);
        let START = (page - 1) * perPage;
        let END = page * perPage;
        let documents = data.slice(START, END);
        return documents;
    });
}
