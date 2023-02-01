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
exports.getDocuments = void 0;
function getDocuments() {
    return __asyncGenerator(this, arguments, function* getDocuments_1() {
        const PER_PAGE = 2;
        const PAGE = 2;
        let response = yield __await(getDocmuentPaged(PER_PAGE, PAGE));
        for (let document of response) {
            yield yield __await(document);
        }
    });
}
exports.getDocuments = getDocuments;
/**
 * @param {number} perPage - number of documents in one page
 * @param {number} page - the page order to get, first page is 1
 */
function getDocmuentPaged(perPage, page) {
    return __awaiter(this, void 0, void 0, function* () {
        let attribute1 = new Map();
        let attribute2 = new Map();
        let attribute3 = new Map();
        let attribute4 = new Map();
        attribute1.set("name", "BREEZ-MJT-GH-B1-DR-A-0001.pdf");
        attribute1.set("role", "A");
        attribute1.set("version", "V1");
        attribute2.set("name", "BREEZ-MJT-GH-GF-DR-A-0002.pdf");
        attribute2.set("role", "A");
        attribute2.set("version", "V2");
        attribute3.set("name", "BREEZ-MJT-ZZ-01-DR-0003.pdf");
        attribute3.set("role", "A");
        attribute3.set("version", "V1");
        attribute4.set("name", "BREEZ-MJT-ZZ-01-DR-0004.pdf");
        attribute4.set("role", "A");
        attribute4.set("version", "V1");
        let version1 = attribute1;
        let version2 = attribute2;
        let version3 = attribute3;
        let version4 = attribute4;
        let document1 = [version1];
        let document2 = [version2];
        let document3 = [version3];
        let document4 = [version4];
        let data = [document1, document2, document3, document4];
        // I get the total number of the page by dividing
        // the length of the data by perPage
        let totalPages = Math.ceil(data.length / perPage);
        // If page is less than 1, I assigned a default value of 1 to it.
        if (page < 1)
            page = 1;
        // Should in case if page is greater than totalPages,
        //
        if (page > totalPages)
            page = totalPages;
        let INDEX = (page - 1) * perPage;
        let documents = [];
        for (INDEX; INDEX < page * perPage && INDEX < data.length; INDEX++) {
            documents.push(data[INDEX]);
        }
        return documents;
    });
}
// data - total data length
// offset - page
// limit - per_page
/*
The total number of the database data really matters
- If the total data in the database is 100
- and I specify limit to 10 and offset to 0
- the data that should be returned should start from 1 - 10

- if I specify limit to 10 and offset to 1
- the data that should be returned should start from 11 - 20
*/
