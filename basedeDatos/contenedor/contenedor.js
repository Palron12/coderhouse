const { options } = require("../data/db");
const knex = require('knex')(options);

class Contenedor {
  constructor(name) {
    this.tableName = name;
    this.init();
  }

  async init() {
    try {
      await knex.schema.createTableIfNoExists(this.tableName, (table) => {
        table.increments("id");
        table.string("tittle");
        table.float("price");
        table.string("thumbnail");
      });
    } catch (error) {
      console.log("Aún no hay archivo");
    }
  }

  async save(object) {
    try {
      return await knex(this.tableName).insert([Object]);
    } catch (err) {
      return `Ocurrio un error al Guardar el producto en la base de datos ${err}`;
    }
  }

  async getAll() {
    //Devuelve un array con los objetos presentes en el archivo
    try {
      return await knex.from(this.tableName).select("*");
    } catch (err) {
      return `Error: ${err}`;
    }
  }

  async getById(id) {
    //Recibe un id y devuelve el objeto con ese id, o null si no está.
    try {
      return await knex
        .from(this.tableName)
        .select("*")
        .where("id", id)
        .limit(1);
    } catch (err) {
      return `Error: ${err}`;
    }
  }

  async deleteById(id) {
    //Elimina del archivo el objeto con el id buscado
    try {
      return await knex.from(this.tableName).where("id", id).del();
    } catch (err) {
      return `Error: ${err}`;
    }
  }

  async deleteAll() {
    //Elimina todos los objetos presentes en el archivo.
    try {
      return await knex.from(this.tableName).del();
    } catch (err) {
      return `Error: ${err}`;
    }
  }
}

module.exports = Contenedor;
