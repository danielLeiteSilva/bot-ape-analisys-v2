const { MongoClient, ServerApiVersion } = require('mongodb')

const url = "mongodb+srv://DanielLeite:Dan%40549216895@database.to2xi.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(url, { useNewUrlParser: true, serverApi: ServerApiVersion.v1 });
const dbName = 'apartaments';

async function Main() {

    await client.connect();
    console.log('Connected successfully to server');
    const db = await client.db(dbName);
    const collection = await db.collection('projects');
    // const collection = await db.collection('test');

    return collection
}

module.exports = Main