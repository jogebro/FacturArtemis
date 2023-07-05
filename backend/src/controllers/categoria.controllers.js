import getConnection from "../db/database.js";

const getCategorias = async (req, res) =>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM categorias");
        console.log(result);
        res.json(result);    
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addCategorias = async (req, res) => {
    try {
        const {CategoriaNombre, Descripcion, Imagen} = req.body;
        
        const category = {CategoriaNombre, Descripcion, Imagen}
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO categorias SET ?", category);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getCategoriaId = async (req, res) =>{
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM categorias WHERE CategoriaID = ?", id);
        console.log(result);
        res.json(result);    
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const deleteCategoria = async (req, res) =>{
    try {
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM categorias WHERE CategoriaID = ?", id);
        console.log(result);
        res.json(result);    
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateCategorias = async (req, res) => {
    try {
        const {id} = req.params;
        const {CategoriaNombre, Descripcion, Imagen} = req.body;
        
        const category = {CategoriaNombre, Descripcion, Imagen}
        const connection = await getConnection();
        const result = await connection.query("UPDATE categorias SET ? WHERE CategoriaID = ?", [category, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP = {
    getCategorias,
    addCategorias,
    getCategoriaId,
    deleteCategoria,
    updateCategorias
}
