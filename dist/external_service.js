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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDocuments = void 0;
const getDocuments = () => __awaiter(void 0, void 0, void 0, function* () {
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
    let version2 = attribute1;
    let version3 = attribute3;
    let document1 = [version1, version2];
    let document2 = [version3];
    return [document1, document2];
});
exports.getDocuments = getDocuments;
