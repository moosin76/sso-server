import { ssrMiddleware } from 'quasar/wrappers'
import session from 'express-session';
import express from 'express';

import db from 'src-ssr/lib/ConnectSequelize';
import ConnectSession from 'connect-session-sequelize';
import getSocketToken from 'src-ssr/lib/getSocketToken';
import socketIdCtrl from 'src-ssr/controller/socketIdCtrl';

import { v4 as uuidv4 } from 'uuid';

export default ssrMiddleware(async ({ app, resolve, publicPath, folders, render, serve }) => {

	// 바디파서
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));

	global.$DB = db;

	const connectSession = ConnectSession(session.Store);
	const mySqlStore = new connectSession({ db: db.sequelize });

	app.use(session({
		key: 'connect.sid',
		secret: 'keyboard cat',
		store : mySqlStore,
		resave: false,
		saveUninitialized: true,
	}));

	db.sequelize.sync({
		alter: process.env.NODE_ENV == 'development',
	});

	app.get('*', (req, res, next) => {
		// console.log('env', process.env.NODE_ENV);
		// console.log(req.session.id)
		// console.log(config)
		if(!req.session.socketToken) {
			req.session.socketToken = getSocketToken();
			req.session.save();
			console.log('New Session Socket Token =>', req.session.socketToken)
		}

		console.log( uuidv4());
		next();
	});

	app.get('/sso', socketIdCtrl);
})