import Sequelize from 'sequelize';
import { dbConfig } from "../config.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};


let dataTypes = Sequelize.DataTypes;

// Create class for custom datatype
class MVARCHAR extends dataTypes.CITEXT {
    toSql() {
        return 'MVARCHAR';
    }
};

class MCHAR extends dataTypes.CITEXT {
    toSql() {
        return 'MCHAR';
    }
};

// Add to DataTypes
dataTypes.MVARCHAR = MVARCHAR;
dataTypes.MCHAR = MCHAR;


db.Sequelize = Sequelize;
db.sequelize = sequelize;

//db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

export default db;