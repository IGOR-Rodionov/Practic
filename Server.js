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
const CRUD_1 = require("./CRUD");
const crud_test = new CRUD_1.CRUD();
const express = require('express');
const formidable = require('express-formidable');
const app = express();
app.use(formidable());
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/mainPage.html');
});
app.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.sendFile(__dirname + '/mainPage.html');
    const data = JSON.stringify(req.fields);
    yield crud_test.Create({ "name": "vika" });
    yield crud_test.Read();
}));
app.listen(3333, () => {
    console.log('Application listening on port 3333!');
});
