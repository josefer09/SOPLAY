import  Sequelize  from "sequelize";
import db from "../config/db";

const Cotizacion = db.define('cotizacion', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    telefono: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    empresa: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    foto: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    servicio: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    
}, {
    freezeTableName: true // Evita la pluralización del nombre de la tabla
});

export default Cotizacion;