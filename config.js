const production = {
	API_SERVER: 'http://ssoapi.bnb.com:20200',
	SESSION_DB: {
		host: 'localhost',
		port: 3306,
		user: 'bnbsso',
		password: 'test1234',
		database: 'bnbsso'
	},
	JWT: {
		option: {
			algorithm: 'HS256',
			issuer: "ezcode",
		},
		SECRET: 'b9d3a576-2c8a-4850-ae5d-c11474f72acb'
	}
}

const development = {
	API_SERVER: 'http://ssoapi.bnb.com:20200',
	SESSION_DB: {
		host: 'localhost',
		port: 3306,
		user: 'bnbsso',
		password: 'test1234',
		database: 'bnbssoapi'
	},
	JWT: {
		option: {
			algorithm: 'HS256',
			issuer: "ezcode",
		},
		SECRET: 'b9d3a576-2c8a-4850-ae5d-c11474f72acb'
	}
}

export default process.env.NODE_ENV !== 'production' ? development : production;