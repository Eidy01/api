class Productos{
    constructor(database){
        this.database = database;
    }
    
    async getProducto(){
        const query = 'SELECT * FROM productos';
        return await this.database.query(query);
    }

    async getProductoId(){
        const query = 'SELECT * FROM productos WHERE id = ?';
        return await this.database.query(query,[id]);
    }

    async deleteProducto(id){
        const query = 'DELETE FROM productos WHERE id = ?';
        return await this.database.query(query,[id]);
    }

    async updateProducto(id, nombre, precio, stock){
        const query = 'UPDATE productos SET nombre=?, precio=?, stock=? WHERE id = ?';
        return await this.database.query(query,[nombre, precio, stock, id]);
    }

    async addProducto(nombre, precio, stock){
        const query = 'INSERT INTO productos  (nombre, precio, stock) VALUES (?,?)';
        return await this.database.query(query,[nombre, precio, stock]);
    }
}
export default Productos;