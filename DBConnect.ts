export class DbConnect {
    private MongoConnect: any;
    private DbName: string;
    constructor(url: string , DbName: string) {
        this.DbName = DbName;
        const MongoClient = require("mongodb").MongoClient;
        this.MongoConnect = new MongoClient(url);
    }
    async Run(Connlection:string){
        try {
            await this.MongoConnect.connect();
            const DataBase = await this.MongoConnect.db(this.DbName);
            const collection = await DataBase.collection(Connlection);
            await this.MongoConnect.close();
            return collection;
        }
        catch(error:any) {
            console.log("Возникла ошибка");
            console.log(error);
        }
    }

    async CloseCon(){
        await this.MongoConnect.close();
    }
}

