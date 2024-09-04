import mysql2 from "mysql2/promise";

class Database{
    constructor (config){
        this.config = config;
        this.pool = this.createPool(this.config);
    }

    async getConnetion(){
        return await this.pool.getConnetion();
    }

    async query(sql,params){
        try {
            const [rows] = await connetion.query(sql,params);
            return rows;
        } finally {
            connetion.release();
        }
    }

    async closeConnection(){
        await this.pool.end();
    }
}

export default Database;