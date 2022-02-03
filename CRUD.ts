import {DbConnect} from "./DBConnect";


class CRUD {
    private DataBase: any;
    constructor() {
        this.DataBase = DbConnect.getInstance("mongodb://localhost:27017/", "test");
       // this.DataBase = new DbConnect("mongodb://localhost:27017/", "test");
    }

    public async Create(data:object){
        const collection = await this.DataBase.Run("news");
        await collection.insertOne(data);
        await this.DataBase.CloseCon();
    }

    public async Delete(){
        const collection = await this.DataBase.Run("news");
        await collection.deleteMany({});
        await this.DataBase.CloseCon();
    }

    public async Read(...fieldsFilter){
        const collection = await this.DataBase.Run("news");
        if (fieldsFilter.length !== 0) {
            //Filtration, fieldsFilter - iterable object (collection)
            let filterQuery;
            for (let prop in fieldsFilter) {
                if(prop === "header" || prop === "body") {
                    fieldsFilter[prop] = new RegExp(fieldsFilter[prop], "gi");
                }
            }
            const data = await collection.find(fieldsFilter).toArray();
        }
        else {
            // await collection.insertOne({"name": "endy", "age": 55, languages: ["russia"]});
            const data =  await collection.find({},{age:55}).toArray();
            console.log(data);
            console.log("успешно");
        }
        await this.DataBase.CloseCon();
    }

    public async Update(){
       await this.DataBase.Run("news");

       await this.DataBase.CloseCon();
    }

}

async function main(){
    let Crud = new CRUD();
    await Crud.Delete();
    await Crud.Create({"name": "sasha"});
    await Crud.Create({"name": "endy", "age": 55, languages: ["russia"]});
    await Crud.Read();
}
main();
