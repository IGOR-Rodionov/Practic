export class DbConnect {
    private MongoConnect: any;
    private DbName: string;
    static instance: DbConnect;

    private constructor(url: string , DbName: string) {
        this.DbName = DbName;
        const MongoClient = require("mongodb").MongoClient;
        this.MongoConnect = new MongoClient(url);
    }

    public static getInstance(url: string , DbName: string): DbConnect {
        if (!DbConnect.instance) {
            DbConnect.instance = new DbConnect(url ,DbName);
        }
        return DbConnect.instance;
    }

    async Run(Connection:string){
        try {
            await this.MongoConnect.connect();
            const DataBase = await this.MongoConnect.db(this.DbName);
            const collection = await DataBase.collection(Connection);
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