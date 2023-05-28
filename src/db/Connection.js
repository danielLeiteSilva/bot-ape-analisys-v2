const { MongoClient, ServerApiVersion } = require('mongodb')

class MongoConnection {
    constructor() {
        this.url = process.env.MONGO || "mongodb+srv://DanielLeite:Dan%40549216895@database.to2xi.mongodb.net/?retryWrites=true&w=majority"
        this.database = process.env.DATABASE || "apartaments"
        this.collection = process.env.COLLECTION || "projects"
        this.client = new MongoClient(this.url, {
            useNewUrlParser: true,
            serverApi: ServerApiVersion.v1
        });
    }

    async connection() {
        await this.client.connect();
        const db = await this.client.db(this.database);
        return await db.collection(this.collection);
    }
}

module.exports = MongoConnection