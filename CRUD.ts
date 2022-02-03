import {DbConnect} from "./DBConnect";
//import express from 'express';

export class CRUD {
    private DataBase: any;
  //  private NewsSchema: any;
    constructor() {
        this.DataBase = DbConnect.getInstance("mongodb://localhost:27017/", "test");
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

    public async Create(data:any){
        const collection = await this.DataBase.Run("news");
        await collection.insertOne(data);
        await this.DataBase.CloseCon();
    }

    public async Delete(){
        const collection = await this.DataBase.Run("news");
        await collection.deleteMany({});
        await this.DataBase.CloseCon();
    }

    public async Read(){
        const collection = await this.DataBase.Run("news");
       // await collection.insertOne({"name": "endy", "age": 55, languages: ["russia"]});
        const data =  await collection.find().toArray();
        console.log(data);
        await this.DataBase.CloseCon();
    }

    public async Update(){
       await this.DataBase.Run("news");

       await this.DataBase.CloseCon();
    }

}

