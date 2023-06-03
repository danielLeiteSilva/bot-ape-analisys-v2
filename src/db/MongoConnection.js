const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')

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

    connect = async () => {
        return await this.client.connect()
    }

    data = async () => {
        await this.connect()
        return await this.client.db(this.database)
    }

    connection = async () => {
        const database = await this.data()
        return await database.collection(this.collection)
    }

    getId = (id) =>{
        return new ObjectId(id)
    }
}

module.exports = MongoConnection