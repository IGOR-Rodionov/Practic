import {CRUD} from "./CRUD";
const crud_test = new CRUD();
const express = require('express');
const formidable = require('express-formidable');
const app = express();
app.use(formidable());
app.get('/', (req:any, res:any) => {
    res.sendFile(__dirname + '/mainPage.html');
});
app.post('/',async (req:any, res:any) => {
    res.sendFile(__dirname + '/mainPage.html');
    const data = JSON.stringify(req.fields);
    await crud_test.Create({"name": "vika"} );
    await crud_test.Read();
});
app.listen(3333, () => {
    console.log('Application listening on port 3333!');
});
