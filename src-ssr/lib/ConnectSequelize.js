import Config from 'src-ssr/config';
import Sequelize from 'sequelize';

const config = Config[process.env.NODE_ENV].SESSION_DB;

const sequelizeConfig = {
	...config,
	dialect: "mysql"
}
const sequelize = new Sequelize(
	config.database,
	config.user,
	config.password,
	sequelizeConfig
);

const db = {};
const models = require.context('../models', true, /.js$/);
models.keys().forEach(file=>{
	const model = models(file).default(sequelize, Sequelize.DataTypes);
	db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
	if(db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
