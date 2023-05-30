const MongoConnection = require("../db/MongoConnection")

class MongoClient extends MongoConnection {
    constructor() {
        super()
    }

    async findOne(id){
        let connection = await this.connection()
        return connection.findOne({_id: id})
    }

    async insertOne(data) {
        let connection = await this.connection()
        return connection.insertOne(data) 
    }

    async all() {
        let connection = await this.connection()
        return connection.find({}).toArray()
    }

    async update(id, data) {
        let connection = await this.connection()
        return connection.updateOne(id, data)
    }

    async delete(id, data) {
        let connection = await this.connection()
        return connection.deleteOne(id, data)
    }
}


module.exports = MongoClient