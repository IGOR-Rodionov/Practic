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
exports.CRUD = void 0;
const DBConnect_1 = require("./DBConnect");
//import express from 'express';
class CRUD {
    //  private NewsSchema: any;
    constructor() {
        this.DataBase = DBConnect_1.DbConnect.getInstance("mongodb://localhost:27017/", "test");
        // Определение шаблона новостей, которые будут храниться в БД
        /*      this.NewsSchema = this.DataBase.Schema({
                  TextNews: {
                      Title: String,
                      OtherText: String
                  },
                  Category: String,
                  PublicationDate: Date,
                  NewsStatus: Boolean,
              });*/
    }
    Create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = yield this.DataBase.Run("news");
            yield collection.insertOne(data);
            yield this.DataBase.CloseCon();
        });
    }
    Delete() {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = yield this.DataBase.Run("news");
            yield collection.deleteMany({});
            yield this.DataBase.CloseCon();
        });
    }
    Read() {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = yield this.DataBase.Run("news");
            // await collection.insertOne({"name": "endy", "age": 55, languages: ["russia"]});
            const data = yield collection.find().toArray();
            console.log(data);
            yield this.DataBase.CloseCon();
        });
    }
    Update() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.DataBase.Run("news");
            yield this.DataBase.CloseCon();
        });
    }
}
exports.CRUD = CRUD;
