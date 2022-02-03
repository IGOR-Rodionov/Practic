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
exports.DbConnect = void 0;
class DbConnect {
    constructor(url, DbName) {
        this.DbName = DbName;
        const MongoClient = require("mongodb").MongoClient;
        this.MongoConnect = new MongoClient(url);
    }
    static getInstance(url, DbName) {
        if (!DbConnect.instance) {
            DbConnect.instance = new DbConnect(url, DbName);
        }
        return DbConnect.instance;
    }
    Run(Connlection) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.MongoConnect.connect();
                const DataBase = yield this.MongoConnect.db(this.DbName);
                const collection = yield DataBase.collection(Connlection);
                return collection;
            }
            catch (error) {
                console.log("Возникла ошибка");
                console.log(error);
            }
        });
    }
    CloseCon() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.MongoConnect.close();
        });
    }
}
exports.DbConnect = DbConnect;
