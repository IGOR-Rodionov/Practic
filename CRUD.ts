import {DbConnect} from "./DBConnect";

class CRUD {
    private DataBase:any;
    constructor() {
        this.DataBase = new DbConnect("mongodb://localhost:27017/", "test");
    }
    public async Create(){
        const collection = await this.DataBase.Run("news")//.insertOne({"name": "Tom", "age": 28, languages: ["english", "spanish"]});
        await collection.insertOne({"name": "endy", "age": 55, languages: ["russia"]});
        const tt =  await collection.find({}).toArray();
        console.log(tt);
         console.log("успешно");
       //  await this.DataBase.CloseCon();
    }
    public async Delete(){
        //     await this.DataBase.Run("news");

        // THIS COMMIT FOR TEST GIT CONNECTION
        //   await this.DataBase.CloseCon();
    }
    public async Read(){
        //   await this.DataBase.Run("news");

        //   await this.DataBase.CloseCon();
    }
    public async Update(){
        //   await this.DataBase.Run("news");

        //    await this.DataBase.CloseCon();
    }

}

let Crud = new CRUD();
Crud.Create();