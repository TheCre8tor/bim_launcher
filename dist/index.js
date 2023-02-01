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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const external_service_1 = require("./external_service");
main();
function main() {
    var _a, e_1, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // 2b. scalling ->
            // const response = generateDocuments();
            // const documents = transformDocument((await response.next()).value);
            // await saveDocument(documents);
            for (var _d = true, _e = __asyncValues((0, external_service_1.getDocuments)()), _f; _f = yield _e.next(), _a = _f.done, !_a;) {
                _c = _f.value;
                _d = false;
                try {
                    const document = _c;
                    const transformedDocument = transformDocument(document);
                    yield saveDocument(transformedDocument);
                }
                finally {
                    _d = true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = _e.return)) yield _b.call(_e);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
}
// async function* generateDocuments(): AsyncGenerator<Documents> {
//   let response = await getDocuments();
//   let documents: Documents = [];
//   let INDEX = 0;
//   for (INDEX; INDEX <= response.length - 1; INDEX++) {
//     documents.push(...response[INDEX]);
//   }
//   yield await Promise.resolve(documents);
// }
function saveDocument(document) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let version of document) {
            saveVersion(version);
        }
        console.log("Saved document");
    });
}
function saveVersion(version) {
    return __awaiter(this, void 0, void 0, function* () {
        console.debug(version);
    });
}
function transformDocument(document) {
    console.log(`Transformed ${document}`);
    return document;
}
